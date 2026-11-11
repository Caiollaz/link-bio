import { perfil, projetos, redes, seo } from '../data/perfil';

export function dadosEstruturados(site: URL, fotoUrl: string) {
  const inicio = new URL('/', site).href;
  const pessoaId = `${inicio}#pessoa`;
  const paginaId = `${inicio}#pagina`;

  const organizacoes = projetos
    .filter((p) => p.tipo === 'Organization')
    .map((p) => ({ '@type': 'Organization', name: p.nome, url: p.url, description: p.descricao }));

  const pessoa = {
    '@type': 'Person',
    '@id': pessoaId,
    name: perfil.nome,
    givenName: perfil.primeiroNome,
    familyName: perfil.sobrenome,
    jobTitle: perfil.cargo,
    description: perfil.resumo,
    image: fotoUrl,
    url: inicio,
    sameAs: redes.map((r) => r.url),
    knowsAbout: perfil.especialidades,
    address: {
      '@type': 'PostalAddress',
      addressLocality: perfil.cidade,
      addressRegion: perfil.estado,
      addressCountry: perfil.pais,
    },
    worksFor: [{ '@type': 'Organization', name: perfil.empresa.nome, url: perfil.empresa.url }, ...organizacoes],
  };

  const itens = projetos.map((p, i) => {
    const base = { '@type': p.tipo, name: p.nome, url: p.url, description: p.descricao };
    const vinculo =
      p.relacao === 'criador'
        ? { creator: { '@id': pessoaId } }
        : p.relacao === 'colaborador'
          ? { contributor: { '@id': pessoaId } }
          : {};
    const extra =
      p.tipo === 'SoftwareApplication' || p.tipo === 'WebApplication' ? { applicationCategory: 'BusinessApplication' } : {};
    return { '@type': 'ListItem', position: i + 1, item: { ...base, ...extra, ...vinculo } };
  });

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': paginaId,
        url: inicio,
        name: seo.titulo,
        description: seo.descricao,
        inLanguage: seo.idioma,
        mainEntity: { '@id': pessoaId },
      },
      pessoa,
      {
        '@type': 'ItemList',
        name: 'Empresa e projetos',
        numberOfItems: itens.length,
        itemListElement: itens,
      },
    ],
  };
}
