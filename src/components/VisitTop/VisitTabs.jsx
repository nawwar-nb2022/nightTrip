const VisitTabs = ({data , viewFunc , tab }) => {



    return (
            <div className={ (tab == data) ?"tab active" : "tab"} onClick={()=>viewFunc(data)} >
                {data}
            </div>
    )
}

export default VisitTabs
