import { Suspense, useContext, useEffect } from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import PageLoader from "../components/PageLoader";

export default function Routes() {
    return (
        <Suspense fallback={<PageLoader />}>
            
                   <Switch>
            <Route path="/home" element={import('../pages/New')} />
            <Route path="/ar" element={import('../pages/ARPage')} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Switch>
        </Suspense>
    );
}