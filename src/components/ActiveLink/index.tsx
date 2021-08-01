import {ReactElement, cloneElement} from 'react'
import {useRouter} from 'next/router';
import Link, {LinkProps} from 'next/link';
import { func } from 'prop-types';

interface ActiveLinkProps extends LinkProps{
    children:ReactElement;
    activeClassName: string;
}

export function ActiveLink({children,activeClassName,...rest}: ActiveLinkProps){
    const {asPath} = useRouter(); //se estiver na pagina blog /posts
    const className = asPath === rest.href ? activeClassName : '';
    // Se a rota/pagina que estamso acessando for igual ao link que clicou então ativa classname
   
    return(
        <Link {...rest}>
           {cloneElement(children,{
               className
           })}
        </Link>
    )
}
