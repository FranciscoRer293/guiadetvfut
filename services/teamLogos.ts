// Serviço para gerenciar logos dos times de futebol brasileiros
export const teamLogos: Record<string, string> = {
  // Times do Brasileirão
  'Flamengo': 'https://logoeps.com/wp-content/uploads/2013/03/flamengo-vector-logo.png',
  'Palmeiras': 'https://logoeps.com/wp-content/uploads/2013/03/palmeiras-vector-logo.png',
  'Corinthians': 'https://logoeps.com/wp-content/uploads/2013/03/corinthians-vector-logo.png',
  'São Paulo': 'https://logoeps.com/wp-content/uploads/2013/03/sao-paulo-fc-vector-logo.png',
  'Santos': 'https://logoeps.com/wp-content/uploads/2013/03/santos-fc-vector-logo.png',
  'Vasco': 'https://logoeps.com/wp-content/uploads/2013/03/vasco-da-gama-vector-logo.png',
  'Botafogo': 'https://logoeps.com/wp-content/uploads/2013/03/botafogo-vector-logo.png',
  'Fluminense': 'https://logoeps.com/wp-content/uploads/2013/03/fluminense-vector-logo.png',
  'Grêmio': 'https://logoeps.com/wp-content/uploads/2013/03/gremio-vector-logo.png',
  'Internacional': 'https://logoeps.com/wp-content/uploads/2013/03/internacional-vector-logo.png',
  'Atlético-MG': 'https://logoeps.com/wp-content/uploads/2013/03/atletico-mineiro-vector-logo.png',
  'Cruzeiro': 'https://logoeps.com/wp-content/uploads/2013/03/cruzeiro-vector-logo.png',
  'Bahia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Esporte_Clube_Bahia_logo.svg/1200px-Esporte_Clube_Bahia_logo.svg.png',
  'Vitória': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Esporte_Clube_Vit%C3%B3ria_logo.svg/1200px-Esporte_Clube_Vit%C3%B3ria_logo.svg.png',
  'Fortaleza': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/FortalezaEsporteClube.svg/1200px-FortalezaEsporteClube.svg.png',
  'Ceará': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ceara_Sporting_Club_crest.svg/1200px-Ceara_Sporting_Club_crest.svg.png',
  'Athletico-PR': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Club_Athletico_Paranaense.svg/1200px-Club_Athletico_Paranaense.svg.png',
  'Coritiba': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Coritiba_Foot_Ball_Club_%28logo%29.svg/1200px-Coritiba_Foot_Ball_Club_%28logo%29.svg.png',
  'Bragantino': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Red_Bull_Bragantino_logo.svg/1200px-Red_Bull_Bragantino_logo.svg.png',
  'Goiás': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Goi%C3%A1s_Esporte_Clube.svg/1200px-Goi%C3%A1s_Esporte_Clube.svg.png',
  'Cuiabá': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Cuiaba_Esporte_Clube_logo.svg/1200px-Cuiaba_Esporte_Clube_logo.svg.png',
  'Atlético-GO': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Atletico_Clube_Goianiense.svg/1200px-Atletico_Clube_Goianiense.svg.png'
};

export const getTeamLogo = (teamName: string): string => {
  // Normalizar o nome do time para busca
  const normalizedName = teamName.trim();
  
  // Busca exata
  if (teamLogos[normalizedName]) {
    return teamLogos[normalizedName];
  }
  
  // Busca parcial (para casos como "Flamengo RJ" ou "SC Corinthians")
  for (const [team, logo] of Object.entries(teamLogos)) {
    if (normalizedName.includes(team) || team.includes(normalizedName)) {
      return logo;
    }
  }
  
  // Logo padrão se não encontrar
  return 'https://via.placeholder.com/100x100/1f2937/ffffff?text=FC';
};
