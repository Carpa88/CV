import { Link as LinkRouter } from 'react-router-dom'; 

const Link = ({ to, children }: {to: string, children?: React.ReactNode | string}) => (
    <LinkRouter to={to} style={{textDecoration: 'none', color: '#e65100'}}>{children}</LinkRouter>
)

export default Link;