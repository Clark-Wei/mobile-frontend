import React, {useState, useEffect} from 'react';
import './style.scss';
import {Layout, Menu} from 'antd';
import ReactIcon from '../components/icon/reactIcon';
import VueIcon from '../components/icon/vueIcon';
import GameIcon from '../components/icon/gameIcon';
import WorkIcon from '../components/icon/workIcon';
import Node from '../node';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

function Home(props) {
    const {Header, Sider, Content} = Layout;

    let [collapsed, setCollapsed] = useState(false)    // 关闭打开左侧菜单按钮
    let [textList, setTextList] = useState([])    // 传入展示的内容
    let [headerList, setHeaderList] = useState([])    // 传入展示的标题
    let [selectKey, setSelectKey] = useState('1')    // 当前选中的key值

    const reactText = [
        'react content 1',
        'react content 2',
        'react content 3',
    ]
    const vueText = [
        'vue content 1',
        'vue content 2',
        'vue content 3',
    ]
    const reactHeader = [
        'This is react header 1',
        'This is react header 2',
        'This is react header 3',
    ]
    const vueHeader = [
        'This is vue header 1',
        'This is vue header 2',
        'This is vue header 3',
    ]

    useEffect(() => {
        setHeaderList(reactText)
        setTextList(reactHeader)
    }, [])

    // 用于展示主体内容
    let showContent = (selectKey) => {
        switch (selectKey) {
            case '1' :
                return <Node textList={textList} headerList={headerList}/>
            case '2' :
                return <Node textList={textList} headerList={headerList}/>
            case '3':
                return '敬请期待'
            case '4':
                return '只得拥有'
        }
    }

    return (
        <div className="Home">
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
                    <div className="logo"/>
                    <Menu mode="inline" defaultSelectedKeys={[selectKey]}>
                        <Menu.Item key="1"
                                   icon={<ReactIcon width='14' height='14'/>}
                                   onClick={() => {
                                       setHeaderList(reactHeader)
                                       setTextList(reactText)
                                       setSelectKey('1')
                                   }}
                        >
                            React
                        </Menu.Item>
                        <Menu.Item key="2"
                                   icon={<VueIcon width='14' height='14'/>}
                                   onClick={() => {
                                       setHeaderList(vueHeader)
                                       setTextList(vueText)
                                       setSelectKey('2')
                                   }}
                        >
                            Vue
                        </Menu.Item>
                        <Menu.Item key="3"
                                   icon={<GameIcon width='14' height='14'/>}
                                   onClick={() => {
                                       setSelectKey('3')
                                   }}
                        >
                            Game
                        </Menu.Item>
                        <Menu.Item key="4"
                                   icon={<WorkIcon width='14' height='14'/>}
                                   onClick={() => {
                                       setSelectKey('4')
                                   }}
                        >
                            Work
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => {
                                setCollapsed(!collapsed)
                            },
                        })}
                    </Header>
                    <Content className="site-layout-background site-layout-content">
                        {showContent(selectKey)}
                    </Content>
                </Layout>
            </Layout>
        </div>

    );
}

export default Home;
