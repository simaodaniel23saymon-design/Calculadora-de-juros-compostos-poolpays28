body {
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(135deg, #1a1a2e, #162447);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}

.calculator-container {
    background: rgba(0,0,0,0.75);
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 8px 25px rgba(0, 255, 255, 0.2);
    width: 100%;
    max-width: 450px;
    backdrop-filter: blur(5px);
    text-align: center;
}

h1 {
    font-family: 'Orbitron', sans-serif;
    font-size: 2em;
    margin-bottom: 20px;
    color: #00fff7;
    text-shadow: 0 0 10px #00fff7;
}

label {
    display: block;
    margin: 15px 0 5px;
    font-weight: bold;
    color: #00e6e6;
}

input[type="number"],
select {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 10px;
    margin-bottom: 15px;
    font-size: 1em;
    box-sizing: border-box;
    outline: none;
    background: rgba(255,255,255,0.1);
    color: #fff;
}

button {
    width: 100%;
    padding: 12px;
    margin-top: 10px;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1.1em;
    cursor: pointer;
    transition: all 0.3s ease;
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,255,255,0.5);
}

.youtube-btn {
    background: linear-gradient(90deg, #FF0000, #FF4F4F);
    color: #fff;
    margin-top: 15px;
    font-weight: bold;
    font-size: 1em;
    text-transform: uppercase;
}

.language-selector {
    position: absolute;
    top: 15px;
    right: 15px;
}

.language-selector button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.3em;
}

.language-menu {
    position: absolute;
    background: #000c;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin-top: 5px;
    display: none;
}

.language-selector:hover .language-menu {
    display: flex;
}

.language-menu span {
    padding: 5px;
    cursor: pointer;
    font-size: 1.2em;
}
