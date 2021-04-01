import '@vkontakte/vkui/dist/vkui.css';

import * as React from 'react';
import { Text, AppRoot, ConfigProvider, AdaptivityProvider, withAdaptivity, usePlatform, SplitLayout, SplitCol, Epic, Panel, Placeholder, View, Group, PanelHeaderBack, PanelHeader, Tabbar, TabbarItem, VKCOM, ViewWidth, Cell, CardGrid, Card, Div, Button, Headline, Header, SimpleCell, InfoRow } from '@vkontakte/vkui';
import { Icon16Search, Icon28ShoppingCartOutline, Icon28ClipOutline, Icon28NewsfeedOutline, Icon28ServicesOutline, Icon28UserCircleOutline } from '@vkontakte/icons';
import ReactDOM from 'react-dom';
import { GetCurrentPage } from './store/API';
import Partners from './components/Partners';
import Products from './components/Products';

const Example = withAdaptivity(({ viewWidth }) => {
    const platform = usePlatform();
    const currentPage = GetCurrentPage();
    const [activeStory, setActiveStory] = React.useState(currentPage);
    const onStoryChange = (e: any) => setActiveStory(e.currentTarget.dataset.story);
    const onPageChange = (e: any) => setActiveStory(e);
    const isDesktop = viewWidth >= ViewWidth.TABLET;
    const hasHeader = platform !== VKCOM;    

    return (
        <SplitLayout
            header={hasHeader && <PanelHeader separator={false} />}
            style={{ justifyContent: "center" }}
        >
            {isDesktop && (
                <SplitCol fixed width="280px" maxWidth="280px">
                    <Panel>
                        {hasHeader && <PanelHeader />}
                        <Group>
                            <Cell
                                disabled={activeStory === 'partners'}
                                style={activeStory === 'partners' ? {
                                    backgroundColor: "var(--button_secondary_background)",
                                    borderRadius: 8
                                } : {}}
                                data-story="partners"
                                onClick={onStoryChange}
                                before={<Icon28NewsfeedOutline />}
                            >
                                Партнёры
                            </Cell>
                            <Cell
                                disabled={activeStory === 'services'}
                                style={activeStory === 'services' ? {
                                    backgroundColor: "var(--button_secondary_background)",
                                    borderRadius: 8
                                } : {}}
                                data-story="services"
                                onClick={onStoryChange}
                                before={<Icon28ServicesOutline />}
                            >
                                Категории
                            </Cell>
                            <Cell
                                disabled={activeStory === 'products'}
                                style={activeStory === 'products' ? {
                                    backgroundColor: "var(--button_secondary_background)",
                                    borderRadius: 8
                                } : {}}
                                data-story="products"
                                onClick={onStoryChange}
                                before={<Icon28ShoppingCartOutline />}
                            >
                                Товары
                            </Cell>
                            <Cell
                                disabled={activeStory === 'clips'}
                                style={activeStory === 'clips' ? {
                                    backgroundColor: "var(--button_secondary_background)",
                                    borderRadius: 8
                                } : {}}
                                data-story="clips"
                                onClick={onStoryChange}
                                before={<Icon28ClipOutline />}
                            >
                                Акции
                            </Cell>
                            <Cell
                                disabled={activeStory === 'profile'}
                                style={activeStory === 'profile' ? {
                                    backgroundColor: "var(--button_secondary_background)",
                                    borderRadius: 8
                                } : {}}
                                data-story="profile"
                                onClick={onStoryChange}
                                before={<Icon28UserCircleOutline />}
                            >
                                О нас
                            </Cell>
                        </Group>
                    </Panel>
                </SplitCol>
            )}

            <SplitCol
                animate={!isDesktop}
                spaced={isDesktop}
                width={isDesktop ? '800px' : '100%'}
                maxWidth={isDesktop ? '800px' : '100%'}
            >
                <Epic activeStory={activeStory} tabbar={!isDesktop &&
                    <Tabbar>
                        <TabbarItem
                            onClick={onStoryChange}
                            selected={activeStory === 'partners'}
                            data-story="partners"
                            text="Партнёры"
                        ><Icon28NewsfeedOutline /></TabbarItem>
                        <TabbarItem
                            onClick={onStoryChange}
                            selected={activeStory === 'services'}
                            data-story="services"
                            text="Сервисы"
                        ><Icon28ServicesOutline /></TabbarItem>
                        <TabbarItem
                            onClick={onStoryChange}
                            selected={activeStory === 'products'}
                            data-story="products"
                            label="12"
                            text="Товары"
                        ><Icon28ShoppingCartOutline /></TabbarItem>
                        <TabbarItem
                            onClick={onStoryChange}
                            selected={activeStory === 'clips'}
                            data-story="clips"
                            text="Клипы"
                        ><Icon28ClipOutline /></TabbarItem>
                        <TabbarItem
                            onClick={onStoryChange}
                            selected={activeStory === 'profile'}
                            data-story="profile"
                            text="Профиль"
                        ><Icon28UserCircleOutline /></TabbarItem>
                    </Tabbar>
                }>
                    <View id="partners" activePanel="partners">
                        <Panel id="partners">
                            <PanelHeader>Партнёры</PanelHeader>
                            <Group style={{ height: '1200px' }}>
                                <Partners isDesktop={isDesktop} />
                            </Group>
                        </Panel>
                    </View>
                    <View id="services" activePanel="services">
                        <Panel id="services">
                            <PanelHeader left={<PanelHeaderBack />}>Сервисы</PanelHeader>
                            <Group style={{ height: '720' }}>
                                <Placeholder icon={<Icon28ServicesOutline width={56} height={56} />}>
                                </Placeholder>
                            </Group>
                        </Panel>
                    </View>
                    <View id="products" activePanel="products">
                        <Panel id="products">
                            <PanelHeader>Товары</PanelHeader>
                            <Products isDesktop={isDesktop} />
                        </Panel>
                    </View>
                    <View id="clips" activePanel="clips">
                        <Panel id="clips">
                            <PanelHeader left={<PanelHeaderBack />}>Клипы</PanelHeader>
                            <Group style={{ height: '1000px' }}>
                                <Placeholder icon={<Icon28ClipOutline width={56} height={56} />}>
                                </Placeholder>
                            </Group>
                        </Panel>
                    </View>
                    <View id="profile" activePanel="profile">
                        <Panel id="profile">
                            <PanelHeader left={<PanelHeaderBack />}>Профиль</PanelHeader>
                            <Group>
                                <CardGrid size={isDesktop ? 'm' : 'l'}>
                                    <Card mode="shadow">
                                        <Div>
                                            <h1>BF Goodrich G Grip 195/60 R15 88H Без шипов</h1>
                                        </Div>
                                        <div style={{ padding: 1 }}>
                                            <img loading="lazy" style={{ maxWidth: isDesktop ? '90%' : '100%', width: isDesktop ? '90%' : '100%', objectFit: 'scale-down', position: 'relative' }} src="https://img1.foroffice.ru/upload/iblock/1db/fargo_ribbons_gold.jpg" alt="Картридж с лентой и чистящим валиком золотой металлик Fargo 45130" />
                                        </div>
                                        
                                        <Div>
                                            <Button before={<Icon28ShoppingCartOutline />} size="l" stretched mode="commerce">Купить на kolesa-darom.ru</Button>
                                        </Div>
                                    </Card>
                                    <Card mode="shadow">
                                        <Header mode="secondary">Информация о товаре</Header>
                                        <SimpleCell multiline>
                                            <InfoRow header="Цена">
                                                4080₽
                                            </InfoRow>
                                        </SimpleCell>
                                        <SimpleCell multiline>
                                            <InfoRow header="Модель">
                                                G Grip 195/60 R15 88H Без шипов
                                            </InfoRow>
                                        </SimpleCell>
                                        <SimpleCell>
                                            <InfoRow header="Производитель">
                                                BF Goodrich
                                            </InfoRow>
                                        </SimpleCell>
                                        <SimpleCell>
                                            <InfoRow header="Артикул">
                                                702746200
                                            </InfoRow>
                                        </SimpleCell>
                                        <SimpleCell>
                                            <InfoRow header="Категория">
                                                Шины
                                            </InfoRow>
                                        </SimpleCell>
                                        <SimpleCell>
                                            <InfoRow header="Продавец">
                                                kolesa-darom.ru
                                            </InfoRow>
                                        </SimpleCell>
                                    </Card>
                                </CardGrid>
                                <CardGrid size='l'>
                                    <Card mode="shadow">
                                        <Header mode="secondary">Описание</Header>
                                        <Div>
                                            <Text weight="regular">
                                                BF G-Grip пришла на смену хорошо зарекомендовавшей себя легковой шине Profiler2. Кроме функционала ей добавили тематический дизайн, который можно увидеть, рассматривая необычные каналы и боковую часть протектора, покрытого стилизованными всполохами огня. После хорошего первого впечатления резина с каждым километром добавляет к водительским ощущениям новые приятные моменты. В G-Grip получен превосходный баланс качеств, обеспечивающих надежное и легкое движение при любой погоде. И если с сухими покрытиями хорошо справляются многие покрышки, то на влажных и мокрых поверхностях у некоторых протекторов появляются чувствительные отклонения. Но только не у Goodrich! Для наиболее четкого представления G-Grip перечислим основные характеристики отдельными строками.      - Рисунок протектора - направленный "волнорез"      - Влажные места на дороге "съедают" специальные канавки      - На поверхностях с толстой пленкой воды включаются продольные каналы - Чуткую реакцию на поворотах обеспечивают блоки солидной ширины в плечевой зоне      - За стабильное прохождение по прямой отвечает центральное неразрывное ребро      - При торможении устойчивость сохраняется за счет работы усиливающих жесткость покрышки миниатюрных канавок, расположенных под углом      - Для дополнительной жесткости покрышки в "Гудрих" создали ламели с самоблокировкой. Начиная осматривать шину, мы останавливались на ее внешнем виде. И, заканчивая, тоже вспомним про дизайн, но уже с утилитарной точки зрения. Оригинальные каналы в непогоду становятся "воронками", усиливающими водоотведение из пятна сцепления резины с мокрым покрытием.
                                            </Text>
                                        </Div>
                                    </Card>
                                </CardGrid>
                                <Header mode="primary">Похожие товары магазина kolesa-darom.ru</Header>
                                <CardGrid size={isDesktop ? 's' : 'l'}>
                                    <Card mode="shadow">
                                        <div style={{ padding: 1 }}>
                                            <img loading="lazy" style={{ maxWidth: isDesktop ? 210 : '100%', width: isDesktop ? 210 : '100%', maxHeight: isDesktop ? 210 : '100%', height: isDesktop ? 210 : '100%', objectFit: 'scale-down', position: 'relative' }} src="https://img1.foroffice.ru/upload/iblock/1db/fargo_ribbons_gold.jpg" alt="Картридж с лентой и чистящим валиком золотой металлик Fargo 45130" />
                                        </div>
                                        <Div>
                                            <Headline weight="regular" style={{ marginBottom: 16 }}>BF Goodrich G Grip 195/60 R15 88H Без шипов</Headline>
                                            <Text weight="medium" style={{ marginBottom: 16 }}>4080₽</Text>
                                            <Text weight="regular">Модель: G Grip 195/60 R15 88H Без шипов</Text>
                                            <Text weight="regular">Производитель: BF Goodrich</Text>
                                        </Div>
                                        <Div style={{ display: 'flex' }}>
                                            <Button size="m" stretched style={{ marginRight: 8 }}>Подробнее</Button>
                                            <Button before={<Icon28ShoppingCartOutline />} size="m" stretched mode="commerce">Купить</Button>
                                        </Div>
                                        <Div>
                                            <Button before={<Icon16Search />} size="m" stretched mode="secondary">Похожее</Button>
                                        </Div>
                                    </Card>
                                    <Card mode="shadow">
                                        <div style={{ padding: 1 }}>
                                            <img loading="lazy" style={{ maxWidth: isDesktop ? 210 : '100%', width: isDesktop ? 210 : '100%', maxHeight: isDesktop ? 210 : '100%', height: isDesktop ? 210 : '100%', objectFit: 'scale-down', position: 'relative' }} src="https://img1.foroffice.ru/upload/iblock/1db/fargo_ribbons_gold.jpg" alt="Картридж с лентой и чистящим валиком золотой металлик Fargo 45130" />
                                        </div>
                                        <Div>
                                            <Headline weight="regular" style={{ marginBottom: 16 }}>BF Goodrich G Grip 195/60 R15 88H Без шипов</Headline>
                                            <Text weight="medium" style={{ marginBottom: 16 }}>4080₽</Text>
                                            <Text weight="regular">Модель: G Grip 195/60 R15 88H Без шипов</Text>
                                            <Text weight="regular">Производитель: BF Goodrich</Text>
                                        </Div>
                                        <Div style={{ display: 'flex' }}>
                                            <Button size="m" stretched style={{ marginRight: 8 }}>Подробнее</Button>
                                            <Button before={<Icon28ShoppingCartOutline />} size="m" stretched mode="commerce">Купить</Button>
                                        </Div>
                                        <Div>
                                            <Button before={<Icon16Search />} size="m" stretched mode="secondary">Похожее</Button>
                                        </Div>
                                    </Card>
                                    <Card mode="shadow">
                                        <div style={{ padding: 1 }}>
                                            <img loading="lazy" style={{ maxWidth: isDesktop ? 210 : '100%', width: isDesktop ? 210 : '100%', maxHeight: isDesktop ? 210 : '100%', height: isDesktop ? 210 : '100%', objectFit: 'scale-down', position: 'relative' }} src="https://img1.foroffice.ru/upload/iblock/1db/fargo_ribbons_gold.jpg" alt="Картридж с лентой и чистящим валиком золотой металлик Fargo 45130" />
                                        </div>
                                        <Div>
                                            <Headline weight="regular" style={{ marginBottom: 16 }}>BF Goodrich G Grip 195/60 R15 88H Без шипов</Headline>
                                            <Text weight="medium" style={{ marginBottom: 16 }}>4080₽</Text>
                                            <Text weight="regular">Модель: G Grip 195/60 R15 88H Без шипов</Text>
                                            <Text weight="regular">Производитель: BF Goodrich</Text>
                                        </Div>
                                        <Div style={{ display: 'flex' }}>
                                            <Button size="m" stretched style={{ marginRight: 8 }}>Подробнее</Button>
                                            <Button before={<Icon28ShoppingCartOutline />} size="m" stretched mode="commerce">Купить</Button>
                                        </Div>
                                        <Div>
                                            <Button before={<Icon16Search />} size="m" stretched mode="secondary">Похожее</Button>
                                        </Div>
                                    </Card>
                                </CardGrid>
                            </Group>
                        </Panel>
                    </View>
                </Epic>
            </SplitCol>
        </SplitLayout>
    );
}, {
    viewWidth: true
});



function App() {
    return (
        <ConfigProvider>
            <AdaptivityProvider>
                <AppRoot>
                    <Example viewWidth={true} />
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root'));
