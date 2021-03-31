import '@vkontakte/vkui/dist/vkui.css';

import * as React from 'react';
import { Text, AppRoot, ConfigProvider, AdaptivityProvider, withAdaptivity, usePlatform, SplitLayout, SplitCol, Epic, Panel, Placeholder, View, Group, PanelHeaderBack, PanelHeader, Tabbar, TabbarItem, VKCOM, ViewWidth, Cell, CardGrid, Card, Search, ContentCard, Div, Button, Headline, Caption, Gradient, Avatar, Title, Header, SimpleCell, CellButton, SizeType, InfoRow } from '@vkontakte/vkui';
import { Icon16Search, Icon16ShoppingCartOutline, Icon28ClipOutline, Icon28MessageOutline, Icon28NewsfeedOutline, Icon28ServicesOutline, Icon28UserCircleOutline, Icon56NewsfeedOutline } from '@vkontakte/icons';
import ReactDOM from 'react-dom';
import { IsDivisibleBy } from 'class-validator';

const Example = withAdaptivity(({ viewWidth }) => {
    const platform = usePlatform();
    const [activeStory, setActiveStory] = React.useState('profile');
    const onStoryChange = (e: any) => setActiveStory(e.currentTarget.dataset.story);
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
                                disabled={activeStory === 'feed'}
                                style={activeStory === 'feed' ? {
                                    backgroundColor: "var(--button_secondary_background)",
                                    borderRadius: 8
                                } : {}}
                                data-story="feed"
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
                                disabled={activeStory === 'messages'}
                                style={activeStory === 'messages' ? {
                                    backgroundColor: "var(--button_secondary_background)",
                                    borderRadius: 8
                                } : {}}
                                data-story="messages"
                                onClick={onStoryChange}
                                before={<Icon28MessageOutline />}
                            >
                                Поиск
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
                            selected={activeStory === 'feed'}
                            data-story="feed"
                            text="Новости"
                        ><Icon28NewsfeedOutline /></TabbarItem>
                        <TabbarItem
                            onClick={onStoryChange}
                            selected={activeStory === 'services'}
                            data-story="services"
                            text="Сервисы"
                        ><Icon28ServicesOutline /></TabbarItem>
                        <TabbarItem
                            onClick={onStoryChange}
                            selected={activeStory === 'messages'}
                            data-story="messages"
                            label="12"
                            text="Сообщения"
                        ><Icon28MessageOutline /></TabbarItem>
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
                    <View id="feed" activePanel="feed">
                        <Panel id="feed">
                            <PanelHeader left={<PanelHeaderBack />}>Новости</PanelHeader>
                            <Group style={{ height: '1200px' }}>
                                <CardGrid size={isDesktop ? 's' : 'l'}>
                                    <Card mode="shadow">
                                        <SimpleCell>
                                            <InfoRow header="Общий бюджет">
                                                3000 р.
                                            </InfoRow>
                                        </SimpleCell>
                                    </Card>
                                    <Card mode="shadow">
                                        <SimpleCell>
                                            <InfoRow header="Общий бюджет">
                                                3000 р.
                                            </InfoRow>
                                        </SimpleCell>
                                    </Card>
                                    <Card mode="shadow">
                                        <SimpleCell>
                                            <InfoRow header="Общий бюджет">
                                                3000 р.
                                            </InfoRow>
                                        </SimpleCell>
                                    </Card>
                                    <Card mode="shadow">
                                        <SimpleCell>
                                            <InfoRow header="Общий бюджет">
                                                3000 р.
                                            </InfoRow>
                                        </SimpleCell>
                                    </Card>
                                    <Card mode="shadow">
                                        <SimpleCell>
                                            <InfoRow header="Общий бюджет">
                                                3000 р.
                                            </InfoRow>
                                        </SimpleCell>
                                    </Card>
                                    <Card mode="shadow">
                                        <SimpleCell>
                                            <InfoRow header="Общий бюджет">
                                                3000 р.
                                            </InfoRow>
                                        </SimpleCell>
                                    </Card>
                                </CardGrid>
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
                    <View id="messages" activePanel="messages">
                        <Panel id="messages">
                            <PanelHeader left={<PanelHeaderBack />}>Сообщения</PanelHeader>
                            <Group description="Внутри Group">
                                <Search after={null} />
                                <CardGrid size={isDesktop ? 's' : 'l'}>
                                    <ContentCard
                                        image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                                        subtitle="unsplash"
                                        header="brown and gray mountains under blue sky during daytime photo"
                                        text="Mountain changji"
                                        caption="Photo by Siyuan on Unsplash"
                                        maxHeight={400}
                                    />
                                    <ContentCard
                                        image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                                        subtitle="unsplash"
                                        header="brown and gray mountains under blue sky during daytime photo"
                                        text="Mountain changji"
                                        caption="Photo by Siyuan on Unsplash"
                                        maxHeight={400}
                                    />
                                    <ContentCard
                                        image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                                        subtitle="unsplash"
                                        header="brown and gray mountains under blue sky during daytime photo"
                                        text="Mountain changji"
                                        caption="Photo by Siyuan on Unsplash"
                                        maxHeight={400}
                                    />
                                </CardGrid>
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
                                            <Button before={<Icon16ShoppingCartOutline />} size="m" stretched mode="commerce">Купить</Button>
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
                                            <Button before={<Icon16ShoppingCartOutline />} size="m" stretched mode="commerce">Купить</Button>
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
                                            <Button before={<Icon16ShoppingCartOutline />} size="m" stretched mode="commerce">Купить</Button>
                                        </Div>
                                        <Div>
                                            <Button before={<Icon16Search />} size="m" stretched mode="secondary">Похожее</Button>
                                        </Div>
                                    </Card>
                                </CardGrid>
                                <CardGrid size={isDesktop ? 's' : 'l'}>
                                    <Card>
                                        <div style={{ paddingBottom: '92%' }} />
                                    </Card>
                                    <Card>
                                        <div style={{ paddingBottom: '92%' }} />
                                    </Card>
                                    <Card>
                                        <div style={{ paddingBottom: '92%' }} />
                                    </Card>
                                </CardGrid>
                            </Group>
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
                                            <Button before={<Icon16ShoppingCartOutline />} size="l" stretched mode="commerce">Купить на kolesa-darom.ru</Button>
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
                                            <Button before={<Icon16ShoppingCartOutline />} size="m" stretched mode="commerce">Купить</Button>
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
                                            <Button before={<Icon16ShoppingCartOutline />} size="m" stretched mode="commerce">Купить</Button>
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
                                            <Button before={<Icon16ShoppingCartOutline />} size="m" stretched mode="commerce">Купить</Button>
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
