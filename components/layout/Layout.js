import {Fragment} from 'react'
import Navigation from  './Navigation'

function Layout(props) {
    return (
        <Fragment>
            <Navigation />
            <main>
                {props.children}
                <h1>Main Layout Area</h1>
            </main>
        </Fragment>
    )
}

export default Layout
