/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, Container, Image} from 'theme-ui';
import {useState} from 'react';
import Sticky from 'react-stickynode';
import {DrawerProvider} from 'contexts/drawer/drawer-provider';
import NavbarDrawer from './navbar-drawer';
import Logo from 'components/logo';
import {NavLink} from 'components/link';
import iconCall from 'assets/images/icons/phoneGreen.svg';

import menuItems from './header.data';

export default function Header() {
    const [state, setState] = useState({
        isMobileMenu: false,
        isSticky: false,
    });
    const handleStateChange = (status) => {
        status.status === Sticky.STATUS_FIXED
            ? setState({...state, isSticky: true})
            : setState({...state, isSticky: false});
    };

    return (
        <DrawerProvider>
            <Sticky
                enabled={true}
                top={0}
                activeClass="is-sticky"
                innerZ={100}
                onStateChange={handleStateChange}
            >
                <header
                    sx={styles.header}
                    className={state.isSticky ? 'is-sticky' : ''}
                >
                    <div sx={styles.wrapper}>
                        <Container sx={styles.container}>
                            <Logo sx={styles.logo}/>
                            <nav as="nav" sx={styles.navbar} className={'navbar'}>
                                {menuItems.map(({path, label}, i) => (
                                    <NavLink key={i} path={path} label={label}/>
                                ))}
                            </nav>
                            <NavbarDrawer/>
                        </Container>

                        <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%90%D1%80%D1%85%D0%B8%D0%BC%D0%B5%D0%B4%D0%B0,+1,+%D0%94%D0%BD%D0%B8%D0%BF%D1%80%D0%BE,+%D0%94%D0%BD%D0%B5%D0%BF%D1%80%D0%BE%D0%BF%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+49000/@48.5284631,35.0833989,18z/data=!3m1!4b1!4m5!3m4!1s0x40d958fc102b1e9f:0x23e39fce21bec26b!8m2!3d48.5284631!4d35.0844959">
                        Показать на карте
                        </a>
                        <a href="tel:+380952167230">
                            <div sx={styles.phoneLink}>
                                <Image sx={styles.iconCall} src={iconCall} alt={'Контейнер'}/>
                                <span sx={styles.phoneNum}>+38 095 216 7230</span>
                            </div>
                        </a>
                    </div>
                </header>
            </Sticky>
        </DrawerProvider>
    );
}

const styles = {
    header: {
        backgroundColor: 'transparent',
        position: 'fixed',
        left: 0,
        right: 0,
        py: [5],
        transition: 'all 0.3s ease-in-out 0s',
        '&.is-sticky': {
            backgroundColor: 'white',
            boxShadow: '0px 20px 50px rgba(59, 90, 136, 0.05)',
            py: [3],
        },
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        // position: ['relative', null, null, 'static'],
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        pr: [null, null, null, null, 9, 9],
    },
    phoneLink: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        pr: [null, null, null, null, 9, 9]
    },
    iconCall: {
        mr: '10px',
        ml: '10px',
        maxWidth: 'unset',
        height: '36px',
        width: '36px',
    },
    phoneNum:{
      display: ['none', 'none', 'none', 'none', 'unset', 'unset']
    },
    logo: {
        mr: [null, null, null, null, 30, 12],
    },
    navbar: {
        display: ['none', null, null, null, 'flex'],
        alignItems: 'center',
        flexGrow: 1,
        // justifyContent: 'center',
        a: {
            cursor: 'pointer',
            display: ['flex'],
            fontWeight: 400,
            color: 'heading',
            padding: 0,
            transition: 'all 0.3s ease-in-out 0s',
            '+ a': {
                ml: 7,
            },
        },
        '.active': {
            color: 'primary',
        },
    },
};
