import "../stylesheets/OnionHater.css"

function OnionHater() {

    const handleClickArea = (ev) => {
        let clase = "";
        const textArea = ev.currentTarget.value;
        if (textArea.includes('cebolla')) {
            clase = "red";
            this.(forceUpdate);


        }
    };
    return (

        <textarea className="onion {clase} " onChange={handleClickArea}></textarea>

    );
}

export default OnionHater;