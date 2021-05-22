const stylesheet = `
html, body {
    max-width: 100% !important;
    
}
body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.card-header {
    justify-content: center;
    align-items: center;
    height: 20vh;
    background-color: rgba(59, 21, 68, 0.842);
    width: 100%;
    color: #ffffff;
    display: flex;
    
}
h1 {
       font-size: 52px;
}
p {
    font-family: monospace;
    position: relative;
    left: 12px;
    font-size: 16px
}

h2, member-title {
    font-family: monospace;
    position: relative;
    font-size: 20px;
    left: 12px;
}
.card-body {
    background-color: rgb(240, 238, 238);
    box-shadow: 2px 5px 5px black;
    padding: 0 20px 0 20px;
    width: 250px;
    height: 54vh;
    margin-bottom: 5vh;
    border-top-left-radius: 10px;
    margin-right: 20px;
}
.card-container {
    position: absolute;
    top: 26vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

}
.card-top {
    width: 100%;
    border-top-left-radius: 10px;
    background-color: rgb(34, 151, 230);
    border: 2px solid rgb(252, 250, 251);
    border-radius: 7px;
}
.card-bottom {
    display: flex;
    flex-direction: column;
    align-content: center;
}
`

module.exports = stylesheet;