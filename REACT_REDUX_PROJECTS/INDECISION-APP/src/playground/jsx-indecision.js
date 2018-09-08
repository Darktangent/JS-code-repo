

const app = {
	title:"Indecision APP",
	subtitle: "Put your life in the hand of a computer",
	options: []

}
const onFormSubmit=(event)=>{
	event.preventDefault()
	const option= event.target.elements.option.value

	if(option){
		app.options.push(option)
		event.target.elements.option.value=""
		renderApp()
	}
}
const removeAll=()=>{

	app.options=[]
	renderApp()

}
const onMakeDecision=()=>{
	const randomNum=Math.floor(Math.random() * app.options.length)
	const option=app.options[randomNum]
	//	alert(option)
	return option

}
const numbers=[55,100,1001]

const renderApp=()=>{
const template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<p>
		{app.options.length > 0 
			? `Here are your options` : "No options"}
		</p>		 
		<button 
		disabled={app.options.length===0} 
		onClick={onMakeDecision}>What should I Do?</button>
		<button onClick={removeAll}> Remove all</button>

		{
			numbers.map((number)=>
				<p key={number}>Numbers in the array: {number}</p>
			)

		}

		<ol>
			

			{app.options.map((option)=>
				<li key={option}>options are:{option}</li>
			)
			
			}
		</ol>
		<form onSubmit={onFormSubmit}>
			<input type="text" name="option" />
			<button> Add Option</button>
		
		</form>
	</div>
)


	const appRoot= document.getElementById('app')
ReactDOM.render(template, appRoot);
}
renderApp()
