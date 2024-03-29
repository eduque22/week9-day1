
import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import whip_image from '../../assets/images/classicmus.jpg'
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';



interface Props {
    
}



const Root = styled('div')({
    padding: 0,
    margin: 0
})


const NavBarContainer = styled ('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

const Logo = styled('h1')({
    margin: '0 0 0 0.45em'
})

const LogoA = styled(Link)({
    color: 'rgb(28, 24, 22)',
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none'
})

const LogoNavigation = styled('ul')({
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
})

const NavA = styled(Link) ({
    display: 'block',
    padding: '1em',
    color: 'black'
})


const Main = styled('main')({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .7)), url(${ whip_image});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute'
})

const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
})




export const NewComp = (props:Props) => {
    const myAuth = localStorage.getItem('myAuth')

    return (
        <Root>
            <NavBarContainer>
                <Logo>
                    <LogoA to='/'>Cars</LogoA>
                </Logo>
                <LogoNavigation>
                    <li>
                        <NavA to='/'>Home</NavA>
                    </li>
                    <li>
                        <NavA to='/newcomp'>Racing Tutorial</NavA>
                    </li>
                    {myAuth === 'true' ? 
                        <><li>
                        <NavA to='/dashboard'>Dashboard</NavA>
                       </li><li>
                            <NavA to='/signin'>Sign Out</NavA>
                        </li></>
                        :
                         <><li>
                         <NavA to='/signin'>Sign In</NavA>
                        </li><li>
                             <NavA to='/signup'>Sign Up</NavA>
                         </li></>
                    }
                </LogoNavigation>
            </NavBarContainer>
            <Main>
                <MainText>
                    <p>Learn how to race below!</p>
                    <Button color='primary' variant='contained' href='https://www.youtube.com/watch?v=uIkATjEOLe0&list=PL0a16lfLrWtxAgLsQKnMiT-i1-DZruUC-'>Learn More</Button>
                </MainText>
            </Main>
        </Root>
    )
}