import logo from '../../assets/logo.png';
import corte from '../../assets/servicos/Corte.png';
import barba from '../../assets/servicos/Barba.png';
import barbaCorte from '../../assets/servicos/BarbaCorte.png'

const barber = {
    topo: {
        nomeBarbearia: "Chicort's"
    },
    detalhes: {
        textoBoasVindas: "Seja Bem Vindo",
        logoBarber: logo,
        textoQuemSomos: "SOBRE:",
        historia: "A barbearia do Chicort's surgiu em 2012 no quintal de sua casa, André Silva o (Chicort's) sem muita experiência acreditou na ideia e então abriu seu primeiro salão de aluguel, localizado no bairro Jd.Morumbi em 2013, passado os anos com muita dedicação e aprendizado André silva veio a realizar seu sonho montando sua barbearia própria localizada no Jd.Paraiso de Viracopos onde atualmente está localizada a Chicort's barber-shop.",
        botao: "Click aqui para se cadastrar!"
    },
    itens: {
        servicos: "Todos os serviços",
        lista: [
            {
                nome: "Corte",
                imagem: corte,
            },
            {

                nome: "Barba",
                imagem: barba,
            },
            {
                nome: "Barba + Corte",
                imagem: barbaCorte
            },
        ]
    }
}

export default barber;