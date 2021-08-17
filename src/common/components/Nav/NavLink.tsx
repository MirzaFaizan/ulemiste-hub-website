import { ReactElement } from 'react';
import { Link as MenuLink } from 'react-scroll';

interface IProps {
    path: string;
    label: string;
    [x: string]: any;
}
export default function NavLink({
    path,
    label,
    ...rest
}: IProps): ReactElement {
    return (
        <MenuLink
            to={path}
            spy={true}
            offset={-70}
            smooth={true}
            duration={500}
            {...rest}>
            {label}
        </MenuLink>
    );
}
