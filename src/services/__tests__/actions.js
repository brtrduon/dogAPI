// import mockAxios from 'axios'
import * as actions from '../../redux/actions'

it('calls axios and returns imgs', async () => {
  const imgs = await actions.searchBreed('hound')

  console.log(imgs)
})