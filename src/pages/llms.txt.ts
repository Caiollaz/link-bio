import type { APIRoute } from 'astro';
import { perfil, projetos, redes, seo } from '../data/perfil';

export const GET: APIRoute = ({ site }) => {
  const inicio = new URL('/', site).href;
  const linhas = [
    `# ${perfil.nome}`,
    '',
    `> ${seo.descricao}`,
    '',
    `${perfil.nome} é ${perfil.cargo.toLowerCase()} na ${perfil.empresa.nome}, em ${perfil.cidade}, ${perfil.estado}. ${perfil.resumo}`,
    '',
    `Especialidades: ${perfil.especialidades.join(', ')}.`,
    '',
    '## Empresa e projetos',
    '',
    ...projetos.map((p) => `- [${p.nome}](${p.url}): ${p.papel}. ${p.descricao}`),
    '',
    '## Contato',
    '',
    ...redes.map((r) => `- [${r.nome}](${r.url})`),
    '',
    '## Página',
    '',
    `- [${perfil.nome}](${inicio}): página de links com a empresa, os projetos e as redes.`,
    '',
  ];
  return new Response(linhas.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
