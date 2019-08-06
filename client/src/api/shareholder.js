import axios from 'axios'

export async function getShareholders() {
  try {
    const items = await axios.get('/api/shareholder')
     console.log(items.data.shareholders);
    return items.data.shareholders
  } catch (error) {
    throw new Error('Sharehodlers not loaded', error)
  }
}