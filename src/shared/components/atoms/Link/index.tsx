import React, { MouseEvent } from 'react';
import { StyledRouterLink, StyledLink, StyledLinkPlaceholder } from './styles/Link';

type LinkProps = {
    href?: string
    to?: string
    onClick?: (e: MouseEvent) => void,
    className?: string
}

const Link: React.FC<LinkProps> = ({ to, href, children, onClick, className }) => {
    if (to) {
        return <StyledRouterLink className={className} to={to} onClick={onClick}>{children}</StyledRouterLink>
    } else if (href) {
        return <StyledLink className={className} href={href} onClick={onClick}>{children}</StyledLink>
    } else {
        return <StyledLinkPlaceholder className={className} onClick={onClick}>{children}</StyledLinkPlaceholder>
    }
};

export default Link;
