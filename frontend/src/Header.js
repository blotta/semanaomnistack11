import React from 'react';

export default function Header({children}) {
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}

// Header ja exportado por export default function...
// export default Header;