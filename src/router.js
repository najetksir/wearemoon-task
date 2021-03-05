import React, { lazy, Suspense } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import ErrorBoundary from "./ErrorBoundary";

const Layout = lazy(() => import("./containers/Layout/Layout"))
const ProduitLayout =lazy(() =>import("./containers/Layout/ProductLayout"))

export default function Routes() {
    return (
        <ErrorBoundary>
            <Suspense fallback={<p>Loading...</p>}>
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <Layout />
                        </Route>
                        <Route path="/produits" exact>
                         <ProduitLayout/>
                        </Route>
                    </Switch>
                </Router>
            </Suspense>

        </ErrorBoundary>
    )



}