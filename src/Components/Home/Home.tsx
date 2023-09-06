import { useState } from 'react';
import style from './Home.module.css';

export const Home = () => {
	const [text, setText] = useState("Home");
	const [temp, setTemp] = useState(true)
	const handleHomeClick = () => {
		setTemp(!temp)
		if(temp){
			setText("Home")
		}
		else{
			setText('New Word')
		}
	}
    return (
		<div className={style.homeContainer}>
			<h1 onClick={handleHomeClick}>{text}</h1>
		</div>
	);
};
