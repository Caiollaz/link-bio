import type { Projeto } from '../data/perfil';

export function dominio(url: string): string {
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, '') + u.pathname.replace(/\/+$/, '');
  } catch {
    return url;
  }
}

export type ProjetoNaGrade = Projeto & { destaque: boolean; atalho?: number; dominio: string };

export function organizarProjetos(projetos: Projeto[]): ProjetoNaGrade[] {
  const visiveis = projetos.filter((p) => p.url.trim() !== '');
  const sobraUm = visiveis.filter((p) => !p.destaque).length % 2 === 1;
  return visiveis.map((p, i) => ({
    ...p,
    destaque: Boolean(p.destaque) || (sobraUm && i === visiveis.length - 1),
    atalho: i < 9 ? i + 1 : undefined,
    dominio: dominio(p.url),
  }));
}
