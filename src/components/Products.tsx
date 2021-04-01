import { Icon16Search, Icon16ShoppingCartOutline, Icon24Filter } from '@vkontakte/icons';
import { Button, Card, CardGrid, Div, Group, Header, Headline, Search, Text } from '@vkontakte/vkui';
import * as React from 'react';
import { SearchProducts } from '../store/API';

interface IProps {
    isDesktop: boolean,
}

export default class Products extends React.Component<IProps, any> {
    constructor(props: IProps) {
        super(props);
        let params = (new URL(document.location.href)).searchParams;
        let page = 0;
        const strPage = params.get("p");
        if (strPage) {
            page = !isNaN(parseInt(strPage, 10)) ? parseInt(strPage, 10) : 0;
        }
        this.state = {
            products: [],
            q: params.get("q"),
            p: page,
            tid: params.get("tid"),
            pid: params.get("pid"),
            productsFound: ''
        };

        this.search(this.state.q, this.state.p, this.state.tid, this.state.pid);
    }

    getSimilar(productName, tid) {
        this.setState({ q: productName, tid: tid, pid: null, p: 1});
        this.search(productName, 1, tid, null);
    }

    search(q, p, tid, pid) {
        window.scrollTo(0, 0);
        document.title = 'Результаты поиска Купить: ' + ( q ? q : '');
        window.history.pushState("", document.title, '/products?q=' + (q ? q : '') + '&p=' + p + '&tid=' + (tid ? tid : '') + '&pid=' + (pid ? pid : ''));

        SearchProducts(q, p, tid, pid )
            .then(products => this.setState({
                productsFound: products["foundCount"],
                products: products["products"].map((item, index) => (
                    <Card key={index} mode="shadow">
                        <div style={{
                            padding: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}>
                            <img loading="lazy" style={{ maxWidth: this.props.isDesktop ? 210 : '100%', width: this.props.isDesktop ? 210 : '100%', maxHeight: this.props.isDesktop ? 210 : '100%', height: this.props.isDesktop ? 210 : '100%', objectFit: 'scale-down', position: 'relative' }} src={item["imgUrl"]} alt={item["name"]} />
                        </div>
                        <Div>
                            <Headline weight="regular" style={{ marginBottom: 16 }}>{item["name"]}</Headline>
                            {item["isAvailable"] &&
                                <Text weight="medium" style={{ marginBottom: 16, color: '#28a745!important' }}>{item["price"]}₽</Text>

                            }
                            {item["isAvailable"] && item["charge"] && item["charge"] != "0" &&
                                <Text weight="medium" style={{ marginBottom: 16, color: '#dc3545!important' }}>Вернём: {item["charge"]}₽</Text>
                            }
                            {!item["isAvailable"] &&
                                <Text weight="medium" style={{ marginBottom: 16 }}>Нет в наличии :(</Text>
                            }
                            {item["model"] &&
                                <Text weight="regular">Модель: {item["model"]}</Text>
                            }
                            {item["vendor"] &&
                                <Text weight="regular">Производитель: {item["vendor"]}</Text>
                            }
                        </Div>
                        <Div style={{ display: 'flex' }}>
                            <Button size="m" stretched style={{ marginRight: 8 }}>Подробнее</Button>
                            <Button before={<Icon16ShoppingCartOutline />} size="m" stretched mode="commerce">Купить</Button>
                        </Div>
                        <Div>
                            <Button onClick={() => this.getSimilar(item["name"], item["categoryId"])} before={<Icon16Search />} size="m" stretched mode="secondary">Похожее</Button>
                        </Div>
                    </Card>
                ))
            }));
    }

    goToPage(p: number) {
        p = p >= 0 ? p : 0;
        this.setState({ p: p });
        this.search(this.state.q, p, this.state.tid, this.state.pid);
    }

    render() {
        return (
            <Group><Search
                value={this.state.q}
                onChange={console.log}
                icon={<Icon24Filter />}
                onIconClick={console.log}
            />
                <Header mode="primary">Товаров найдено: {this.state.productsFound}</Header>
                <CardGrid size={this.props.isDesktop ? 's' : 'l'}>

                    {
                        this.state.products
                    }

                </CardGrid>
                <Div style={{
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}>
                    <Button onClick={() => this.goToPage(0)} size="m" style={{ marginRight: 8 }}>Начало</Button>
                    <Button onClick={() => this.goToPage(this.state.p - 1)} size="m" style={{ marginRight: 8 }}>Назад</Button>
                    <Button onClick={() => this.goToPage(this.state.p + 1)} size="m" >Далее</Button>
                </Div>
            </Group>
        );
    }
}