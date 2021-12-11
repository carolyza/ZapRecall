export default function Card(props){
    return(
        <div class ="card">
                <div class="topCard">
                    <p>{props.question}</p>
                    <h2>{props.numberCard}</h2>
                </div>
                <div class="contentCard">
                    <h3>{props.inside}</h3>
                </div>
                <div class="buttons">
                    <button class="button1">{props.button1}</button>
                    <button class="button2" >{props.button2}</button>
                    <button class="button3">{props.button3}</button>
                    <button class="button4">{props.button4}</button>
                    </div>
            </div>
    )
}