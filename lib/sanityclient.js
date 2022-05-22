import sanityClient from '@sanity/client'
export const client = sanityClient({
    projectId: 'b80mablm',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token:
      'sk6JKqOg5TmWqo0tWAXU9cpK15zzhgyRJg2i11PJiDkvbWqS9EvLaAG7s1qYzorb1OHleM2MkcydYkeNkJzUdfOL4boCH9ONvTRzWH14lsWwNtxD2aG9U4IMnjeCtBYToMcRayQ0yVpbaZZ8I1tPCUYVGS9w4UPwjoFIGvTmShi26cOJvTnT',
    useCdn: false,
  })