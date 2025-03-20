import '/home/ajaygv/Gro/src/App.css'

export const Header = () => {
    return (
        <>
            <div id="Header_Container">
                <div id="Logo_Container">
                  
                    <img src="data:image/png;base64,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" />
                              
                </div>
                <div>
                    <button style={{borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px" }}>Home</button>
                    <button>Portfolio</button>
                    <button>Mutual Funds</button>
                    <button>Tools </button>
                    <button style={{borderTopRightRadius: "8px", borderBottomRightRadius: "8px" }}>Transaction</button>
                </div>
                <div>
                    <button  style={{borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px" }}><img src="/home/ajaygv/Gro/src/assets/search.svg" /></button>
                    <button><img src="/home/ajaygv/Gro/src/assets/user.svg" /></button>
                    <button><img src="/home/ajaygv/Gro/src/assets/notification.svg" /></button>
                    <button  style={{borderTopRightRadius: "8px", borderBottomRightRadius: "8px" }}><img src="/home/ajaygv/Gro/src/assets/logout.svg" /></button>
                </div>
            </div>
        </>

    )
}