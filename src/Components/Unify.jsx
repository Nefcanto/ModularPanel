import React from "react"
import app from "App"

const Unify = ({
    component,
    ...rest
}) => {

    const log = text => {
        // console.log(text)
    }

    if (!component) {
        const message = "Component passed to the unify is null or undefined"
        return <span className="hidden">{message}</span>
    }
    if (typeof component === "string") {
        log('component is string')
        return <>{component}</>
    }
    if (component.props && component.props.superAdmin && !app.isSuperAdmin()) {
        log('component has props and superAdmin is the user is not super admin')
        return <span className="hidden"></span>
    }
    if (typeof component.type === "object") {
        log('component is object')
        let type = component
        while (typeof type === "object" && type.type && typeof type.type === "object") {
            type = type.type
        }
        let props = rest
        if (rest.props) {
            props = rest.props
        }
        log(typeof type, typeof type.type)
        if (typeof type.type === "string") {
            const Component = () => type
            return <Component {...type.props} {...props} />
        }
        return <div>...</div>
    }
    if (component.type) {
        log('component has type')
        if (typeof component.type === "string") {
            log('component type is string')
            return <>{component}</>
        }
        if (typeof component.type === "function") {
            log('component type is function')
            const Component = component.type
            let props = rest
            if (rest.props) {
                props = rest.props
            }
            return <Component {...component.props} {...props} />
        }
        if (typeof component.type === "string") {
            log('component type is string, returning its type')
            return <>
                {component.type}
            </>
        }
        if (typeof component.type === "symbol") {
            log('component type is symbol')
            if (component.type.toString() === "Symbol(react.fragment)") {
                log('component type is react.fragment')
                if (component.props && component.props.children) {
                    if (Array.isArray(component.props.children)) {
                        return <>
                            {
                                component.props.children
                                    .filter(i => i !== undefined)
                                    .filter(i => {
                                        if (i.props?.superAdmin === true) {
                                            return app.isSuperAdmin()
                                        }
                                        else if (
                                            i.type instanceof Function &&
                                            (
                                                i.type.toString().indexOf("superAdmin: true") > 0
                                                ||
                                                i.type.toString().indexOf("superAdmin:!0") > 0
                                            )) {
                                            return app.isSuperAdmin()
                                        }
                                        else {
                                            return true
                                        }
                                    })
                                    .map((i, index) => {
                                        const { superAdmin, ...rest } = i.props || {}
                                        return <Unify
                                            key={index}
                                            component={
                                                (i.type && i.type instanceof Function)
                                                    ? <i.type {...rest} />
                                                    :
                                                    <Unify
                                                        component={i}
                                                    />
                                            }
                                            {...i.props}
                                            {...rest}
                                        />
                                    })
                            }
                        </>
                    } else {
                        const { key, ...childrenRest } = component.props.children
                        return <Unify
                            component={component.props.children}
                            {...childrenRest}
                            {...rest}
                        />
                    }
                }
            }
            else {
                log('component type IS NOT react.fragment')
            }
        }
    }
    if (typeof component === "object") {
        log('got object', component)
        return <div>...</div>
    }
    if (typeof component === "function") {
        const Component = component
        return <Component {...rest} {...component.props} />
    }

    return <div>{component}</div>
}

export default Unify
