import { Doodyai } from '.'

let doodyai

beforeEach(async () => {
  doodyai = await Doodyai.create({ id: 'test', name: 'test', created_at date: 'test', output info: 'test', : 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = doodyai.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(doodyai.id)
    expect(view.id).toBe(doodyai.id)
    expect(view.name).toBe(doodyai.name)
    expect(view.created_at date).toBe(doodyai.created_at date)
    expect(view.output info).toBe(doodyai.output info)
    expect(view.).toBe(doodyai.)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = doodyai.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(doodyai.id)
    expect(view.id).toBe(doodyai.id)
    expect(view.name).toBe(doodyai.name)
    expect(view.created_at date).toBe(doodyai.created_at date)
    expect(view.output info).toBe(doodyai.output info)
    expect(view.).toBe(doodyai.)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
