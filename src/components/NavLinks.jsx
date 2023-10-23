import { Link } from "react-router-dom";

const NavLink = () => {
    const links = [
        { name: 'Indonesia' },
        { name: 'Covid' },
    ];
    return (
        <>
            {links.map((link, index) => (
                <div key={index}>
                    <div>
                    <Link to={link.name === 'Indonesia' ? '/indonesia' : link.name === 'Covid' ? '/covid': link.name === 'Programing' ? '/programing':'/'}>{link.name}</Link>
                    </div>
                </div>
            ))}
        </>
    );
};

export default NavLink;