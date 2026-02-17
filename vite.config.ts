import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const AIRTABLE_BASE = 'https://api.airtable.com'
const AIRTABLE_APP = 'appFzpEcAata6XxpD'

const EVENT_SPORT_FILTERS: Record<string, string> = {
  futebol: "AND({Status}=TRUE(),FIND('futebol',LOWER(ARRAYJOIN(sport))),NOT(FIND('americano',LOWER(ARRAYJOIN(sport)))))",
  basquete: "AND({Status}=TRUE(),FIND('basquete',LOWER(ARRAYJOIN(sport))))",
  'futebol-americano': "AND({Status}=TRUE(),FIND('futebol americano',LOWER(ARRAYJOIN(sport))))",
  automobilismo: "AND({Status}=TRUE(),FIND('automobilismo',LOWER(ARRAYJOIN(sport))))",
  beisebol: "AND({Status}=TRUE(),FIND('beisebol',LOWER(ARRAYJOIN(sport))))",
  hoquei: "AND({Status}=TRUE(),FIND('hóquei',LOWER(ARRAYJOIN(sport))))",
}

const BANNER_SPORT_FILTERS: Record<string, string> = {
  futebol: "AND(FIND('futebol',LOWER(ARRAYJOIN(sport))),NOT(FIND('americano',LOWER(ARRAYJOIN(sport)))))",
  basquete: "FIND('basquete',LOWER(ARRAYJOIN(sport)))",
  'futebol-americano': "FIND('futebol americano',LOWER(ARRAYJOIN(sport)))",
  automobilismo: "FIND('automobilismo',LOWER(ARRAYJOIN(sport)))",
  beisebol: "FIND('beisebol',LOWER(ARRAYJOIN(sport)))",
  hoquei: "FIND('hóquei',LOWER(ARRAYJOIN(sport)))",
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api/events': {
          target: AIRTABLE_BASE,
          changeOrigin: true,
          rewrite: () => `/v0/${AIRTABLE_APP}/event`,
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq, req) => {
              proxyReq.setHeader('Authorization', `Bearer ${env.AIRTABLE_TOKEN}`)
              const url = new URL(req.url!, 'http://localhost')
              const sport = url.searchParams.get('sport')
              const params = new URLSearchParams({
                view: 'Grid view',
                cellFormat: 'string',
                timeZone: 'America/Sao_Paulo',
                userLocale: 'pt-br',
              })
              if (sport && EVENT_SPORT_FILTERS[sport]) {
                params.set('filterByFormula', EVENT_SPORT_FILTERS[sport])
              } else {
                params.set('filterByFormula', '{Status}=TRUE()')
              }
              proxyReq.path = `/v0/${AIRTABLE_APP}/event?${params}`
            })
          },
        },
        '/api/banners': {
          target: AIRTABLE_BASE,
          changeOrigin: true,
          rewrite: () => `/v0/${AIRTABLE_APP}/banner`,
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq, req) => {
              proxyReq.setHeader('Authorization', `Bearer ${env.AIRTABLE_TOKEN}`)
              const url = new URL(req.url!, 'http://localhost')
              const sport = url.searchParams.get('sport')
              const params = new URLSearchParams({ view: 'Grid view' })
              if (sport && BANNER_SPORT_FILTERS[sport]) {
                params.set('filterByFormula', BANNER_SPORT_FILTERS[sport])
              }
              proxyReq.path = `/v0/${AIRTABLE_APP}/banner?${params}`
            })
          },
        },
        '/api/teams': {
          target: AIRTABLE_BASE,
          changeOrigin: true,
          rewrite: () => `/v0/${AIRTABLE_APP}/team`,
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              proxyReq.setHeader('Authorization', `Bearer ${env.AIRTABLE_TOKEN}`)
              const params = new URLSearchParams({
                view: 'Grid view',
                filterByFormula: "AND({name-team}!='',{Logo}!='')",
              })
              proxyReq.path = `/v0/${AIRTABLE_APP}/team?${params}`
            })
          },
        },
      },
    },
  }
})
