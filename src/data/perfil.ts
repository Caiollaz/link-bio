import type { ImageMetadata } from 'astro';
import avatar from '../assets/avatar.jpg';
import ramoIcone from '../assets/projetos/ramo-icone.png';
import ramoTela from '../assets/projetos/ramo.jpg';
import mixlabsIcone from '../assets/projetos/mixlabs-icone.png';
import mixlabsTela from '../assets/projetos/mixlabs.jpg';
import brikIcone from '../assets/projetos/brik-icone.png';
import brikTela from '../assets/projetos/brik.jpg';
import dojoplannerIcone from '../assets/projetos/dojoplanner-icone.png';
import dojoplannerTela from '../assets/projetos/dojoplanner.jpg';
import proficioIcone from '../assets/projetos/proficio-icone.png';
import proficioTela from '../assets/projetos/proficio.jpg';
import ulumaIcone from '../assets/projetos/uluma-icone.png';
import ulumaTela from '../assets/projetos/uluma.jpg';
import pokerlyIcone from '../assets/projetos/pokerly-icone.png';
import pokerlyTela from '../assets/projetos/pokerly.jpg';
import yarnwiseIcone from '../assets/projetos/yarnwise-icone.png';
import yarnwiseTela from '../assets/projetos/yarnwise.jpg';

export type Tipo = 'Organization' | 'SoftwareApplication' | 'WebApplication' | 'WebSite';

export type Projeto = {
  nome: string;
  url: string;
  papel: string;
  relacao: 'criador' | 'socio' | 'colaborador';
  descricao: string;
  tipo: Tipo;
  icone: ImageMetadata;
  tela: ImageMetadata;
  cor: string;
  tinta: string;
  destaque?: boolean;
};

export type Rede = {
  nome: 'LinkedIn' | 'GitHub' | 'Instagram';
  url: string;
};

export const perfil = {
  nome: 'Caio Labella',
  primeiroNome: 'Caio',
  sobrenome: 'Labella',
  cargo: 'Engenheiro de Software Sênior',
  empresa: { nome: 'Chaves na Mão', url: 'https://www.chavesnamao.com.br' },
  titulo: 'Engenheiro de Software Sênior na Chaves na Mão',
  bio: 'Full stack e IA aplicada. Sócio e CAIO da Mixlabs. Curitiba, PR.',
  resumo:
    'Trabalha com desenvolvimento full stack e inteligência artificial aplicada. É sócio e Chief AI Officer (CAIO) da Mixlabs, sócio e CEO da DojoPlanner e cria produtos próprios como o Ramo, o Pokerly e o Yarnwise.',
  cidade: 'Curitiba',
  estado: 'PR',
  pais: 'BR',
  foto: avatar,
  especialidades: [
    'Engenharia de software',
    'Desenvolvimento full stack',
    'Inteligência artificial aplicada',
    'Agentes de IA',
    'TypeScript',
    'Node.js',
    'NestJS',
    'React',
    'Next.js',
    'AWS',
  ],
};

export const seo = {
  titulo: 'Caio Labella · Engenheiro de Software Sênior, Full Stack e IA',
  descricao:
    'Caio Labella, engenheiro de software sênior em Curitiba, full stack e IA aplicada. Sócio e CAIO da Mixlabs, sócio e CEO da DojoPlanner e criador do Ramo.',
  idioma: 'pt-BR',
  locale: 'pt_BR',
  corEscura: '#070806',
  corClara: '#f2f5ea',
  lupa: 'DNYcK4Fp',
};

export const projetos: Projeto[] = [
  {
    nome: 'Ramo',
    url: 'https://useramo.app',
    papel: 'Criador',
    relacao: 'criador',
    descricao: 'App desktop para acompanhar seus agentes de IA ao vivo.',
    tipo: 'SoftwareApplication',
    icone: ramoIcone,
    tela: ramoTela,
    cor: '#ecebe4',
    tinta: '#161616',
    destaque: true,
  },
  {
    nome: 'Mixlabs',
    url: 'https://mixlabs.com.br',
    papel: 'Sócio e CAIO',
    relacao: 'socio',
    descricao: 'Sites, sistemas e automações com IA sob medida para empresas.',
    tipo: 'Organization',
    icone: mixlabsIcone,
    tela: mixlabsTela,
    cor: '#3957bd',
    tinta: '#ffffff',
  },
  {
    nome: 'Brik CRM',
    url: 'https://brikcrm.com.br',
    papel: 'Designer',
    relacao: 'colaborador',
    descricao: 'CRM de WhatsApp com IA: atendimento, funil de vendas e campanhas.',
    tipo: 'WebApplication',
    icone: brikIcone,
    tela: brikTela,
    cor: '#00275e',
    tinta: '#ffffff',
  },
  {
    nome: 'DojoPlanner',
    url: 'https://dojoplanner.com.br',
    papel: 'Sócio e CEO',
    relacao: 'socio',
    descricao: 'Gestão para academias de artes marciais: alunos, faixas, presenças e Pix.',
    tipo: 'Organization',
    icone: dojoplannerIcone,
    tela: dojoplannerTela,
    cor: '#f97316',
    tinta: '#16243f',
  },
  {
    nome: 'Proficio',
    url: 'https://proficio.com.br',
    papel: 'Dev Full Stack Sênior',
    relacao: 'colaborador',
    descricao: 'Marketplace de serviços locais, com site e app.',
    tipo: 'WebApplication',
    icone: proficioIcone,
    tela: proficioTela,
    cor: '#4a1d8f',
    tinta: '#ffffff',
  },
  {
    nome: 'Uluma',
    url: 'https://uluma.com.br',
    papel: 'Designer',
    relacao: 'colaborador',
    descricao: 'Finanças da casa compartilhada, sem planilha.',
    tipo: 'WebApplication',
    icone: ulumaIcone,
    tela: ulumaTela,
    cor: '#082019',
    tinta: '#3dd6a3',
  },
  {
    nome: 'Pokerly',
    url: 'https://pokerly.com.br',
    papel: 'Criador',
    relacao: 'criador',
    descricao: 'Planning poker para times ágeis, sem cadastro.',
    tipo: 'WebApplication',
    icone: pokerlyIcone,
    tela: pokerlyTela,
    cor: '#141414',
    tinta: '#e4fe74',
  },
  {
    nome: 'Yarnwise',
    url: 'https://yarnwise.app',
    papel: 'Criador',
    relacao: 'criador',
    descricao: 'Receitas, carreiras e o tempo de cada peça de crochê.',
    tipo: 'WebApplication',
    icone: yarnwiseIcone,
    tela: yarnwiseTela,
    cor: '#c42a43',
    tinta: '#ffffff',
  },
];

export const redes: Rede[] = [
  { nome: 'LinkedIn', url: 'https://www.linkedin.com/in/caiolabella/' },
  { nome: 'GitHub', url: 'https://github.com/Caiollaz' },
];
