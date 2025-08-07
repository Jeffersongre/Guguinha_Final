export interface Scene {
  id: number;
  title: string;
  text: string;
  narration: string;
  audioFile: string;
  emotion: string;
  backgroundImage: string;
  backgroundColor: string;
}

export const scenes: Scene[] = [
  {
    id: 1,
    title: "O Começo",
    text: "Guguinha acorda com um sorriso no rosto e vai até a geladeira buscar seu doce favorito... mas ele sumiu! 😱",
    narration: "Guguinha acorda com um sorriso no rosto e vai até a geladeira buscar seu doce favorito, mas ele sumiu!",
    audioFile: "/audio/scene1.mp3",
    emotion: "😱",
    backgroundImage: "/images/scene1.jpg",
    backgroundColor: "#FFE4E1"
  },
  {
    id: 2,
    title: "A Investigação",
    text: "Guguinha começa a procurar pistas. Fala com o Professor Robson e Mestre Jefferson, dois sábios que lhe dão conselhos valiosos: 'Guguinha, o verdadeiro culpado sempre deixa migalhas… siga seu coração e suas pegadas.' 🕵️‍♂️",
    narration: "Guguinha começa a procurar pistas. Fala com o Professor Robson e Mestre Jefferson, dois sábios que lhe dão conselhos valiosos sobre seguir seu coração e as pegadas do culpado.",
    audioFile: "/audio/scene2.mp3",
    emotion: "🕵️‍♂️",
    backgroundImage: "/images/scene2.jpg",
    backgroundColor: "#F0E68C"
  },
  {
    id: 3,
    title: "A Tristeza",
    text: "Guguinha fica triste, começa a desconfiar de seus amigos e até acusa injustamente o Jefferson, rompendo uma amizade. Emoção, música triste, corações partidos. 💔",
    narration: "Guguinha fica muito triste, começa a desconfiar de seus amigos e até acusa injustamente o Jefferson, rompendo uma preciosa amizade.",
    audioFile: "/audio/scene3.mp3",
    emotion: "💔",
    backgroundImage: "/images/scene3.jpg",
    backgroundColor: "#E6E6FA"
  },
  {
    id: 4,
    title: "A Superação",
    text: "Guguinha cresce, se transforma em um homem romântico e cavalheiro. Decide seguir sua vida e deixar o passado para trás. 🌟",
    narration: "Guguinha cresce como pessoa, se transforma em um homem romântico e cavalheiro. Ele decide seguir sua vida e deixar o passado para trás.",
    audioFile: "/audio/scene4.mp3",
    emotion: "🌟",
    backgroundImage: "/images/scene4.jpg",
    backgroundColor: "#DDA0DD"
  },
  {
    id: 5,
    title: "A Verdade Vem à Tona",
    text: "Um dia, ele encontra um papel escondido com a marca de um batom e o nome: Camila. Ele se lembra... ela estava por perto aquele dia. Camila, a malvada, foi quem comeu o doce de Guguinha! 🔍",
    narration: "Um dia, Guguinha encontra um papel escondido com a marca de um batom e o nome Camila. Ele se lembra que ela estava por perto aquele dia. Camila foi quem comeu seu doce!",
    audioFile: "/audio/scene5.mp3",
    emotion: "🔍",
    backgroundImage: "/images/scene5.jpg",
    backgroundColor: "#FFB6C1"
  },
  {
    id: 6,
    title: "O Perdão e o Recomeço",
    text: "Ao invés de se vingar, Guguinha decide perdoar e volta a se aproximar de seus amigos. O amor e a amizade triunfam! ❤️",
    narration: "Ao invés de se vingar, Guguinha escolhe o perdão e volta a se aproximar de seus amigos. O amor e a amizade triunfam sobre tudo!",
    audioFile: "/audio/scene6.mp3",
    emotion: "❤️",
    backgroundImage: "/images/scene6.jpg",
    backgroundColor: "#FF69B4"
  }
];