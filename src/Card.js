export default function Card(props){
    return(
        <div className ="card">
                <div class="topCard">
                    <p>{props.question}</p>
                    <h2>{props.numberCard}/5</h2>
                </div>
                <div class="contentCard">
                    <h3>{props.inside}</h3>
                </div>
                <div class="buttons">
                    <button class="button1" onClick = {()=>props.counter()}>{props.button1}</button>
                    <button class="button2" onClick = {()=>props.counter()}>{props.button2}</button>
                    <button class="button3" onClick = {()=>props.counter()}>{props.button3}</button>
                    <button class="button4" onClick = {()=>props.counter()}>{props.button4}</button>
                    </div>
            </div>
    )
}