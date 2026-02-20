import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Component from './assets/components/embedExpr.jsx'
import SettingAttr from './assets/components/settingAttr.jsx'
import RenderingCls from './assets/components/renderingCls.jsx'
import RenderingLst from './assets/components/renderingList.jsx'
import ConditionRend from './assets/components/conditionalRend.jsx'
import HandlingEve from './assets/components/handlingEvent.jsx'
import BindHandler from './assets/components/bindEventHandler.jsx'
import UpdateState from './assets/components/updateState.jsx'
import PassingEvent from './assets/components/passEventArg.jsx'

createRoot(document.getElementById('root')).render(
    // <App />,
    // <Component />,
    // <SettingAttr />,
    // <RenderingCls />,
    // <RenderingLst />,
    // <ConditionRend />,
    // <HandlingEve />,
    // <BindHandler />,
    // <UpdateState />,
    <PassingEvent />

)
