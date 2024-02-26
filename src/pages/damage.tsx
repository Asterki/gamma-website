import * as React from 'react';


const DamagePage = () => {
    React.useEffect(() => {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }, [])

    return (
        <div>
            <p>Redirecting...</p>
        </div>
    );
}
 
export default DamagePage;