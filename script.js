let veiculos=[]
let motoristas=[]
let combustivel=[]
let manutencao=[]
let lic=[]

function mostrar(id){

document.querySelectorAll("section").forEach(sec=>{
sec.classList.remove("active")
})

document.getElementById(id).classList.add("active")

}

mostrar("dashboard")

// VEICULOS

document.getElementById("formVeiculo").onsubmit=e=>{
e.preventDefault()

let v={
placa:placa.value,
modelo:modelo.value,
fabricante:fabricante.value,
base:base.value
}

veiculos.push(v)
atualizar()
}

// MOTORISTAS

formMotorista.onsubmit=e=>{
e.preventDefault()

let m={
nome:nome.value,
cpf:cpf.value,
cnh:cnh.value,
veiculo:veiculoMotorista.value
}

motoristas.push(m)
atualizar()

}

// COMBUSTIVEL

formCombustivel.onsubmit=e=>{
e.preventDefault()

let c={
data:dataComb.value,
placa:placaComb.value,
litros:litros.value,
valor:valor.value
}

combustivel.push(c)
atualizar()

}

// MANUTENÇÃO

formManut.onsubmit=e=>{
e.preventDefault()

let m={
placa:placaMan.value,
tipo:tipoMan.value,
custo:custo.value
}

manutencao.push(m)
atualizar()

}

// LICENCIAMENTO

formLic.onsubmit=e=>{
e.preventDefault()

let l={
placa:placaLic.value,
tipo:tipoLic.value,
valor:valorLic.value
}

lic.push(l)
atualizar()

}

function atualizar(){

totalVeiculos.innerText=veiculos.length
totalMotoristas.innerText=motoristas.length

let total=0

combustivel.forEach(c=>{
total+=Number(c.valor)
})

totalCombustivel.innerText="R$ "+total

// atualizar tabelas

tabelaVeiculos.querySelector("tbody").innerHTML=
veiculos.map(v=>`
<tr>
<td>${v.placa}</td>
<td>${v.modelo}</td>
<td>${v.fabricante}</td>
<td>${v.base}</td>
</tr>
`).join("")

tabelaMotoristas.querySelector("tbody").innerHTML=
motoristas.map(m=>`
<tr>
<td>${m.nome}</td>
<td>${m.cpf}</td>
<td>${m.cnh}</td>
<td>${m.veiculo}</td>
</tr>
`).join("")

tabelaComb.querySelector("tbody").innerHTML=
combustivel.map(c=>`
<tr>
<td>${c.data}</td>
<td>${c.placa}</td>
<td>${c.litros}</td>
<td>${c.valor}</td>
</tr>
`).join("")

tabelaManut.querySelector("tbody").innerHTML=
manutencao.map(m=>`
<tr>
<td>${m.placa}</td>
<td>${m.tipo}</td>
<td>${m.custo}</td>
</tr>
`).join("")

tabelaLic.querySelector("tbody").innerHTML=
lic.map(l=>`
<tr>
<td>${l.placa}</td>
<td>${l.tipo}</td>
<td>${l.valor}</td>
</tr>
`).join("")

grafico()

}

// gráfico

function grafico(){

let placas=combustivel.map(c=>c.placa)
let valores=combustivel.map(c=>c.valor)

new Chart(
document.getElementById("graficoCombustivel"),
{
type:"bar",
data:{
labels:placas,
datasets:[{
label:"Gasto combustível",
data:valores,
backgroundColor:"#1A73E8"
}]
}
})

}
