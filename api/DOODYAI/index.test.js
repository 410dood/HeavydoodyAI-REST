import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Doodyai } from '.'

const app = () => express(apiRoot, routes)

let doodyai

beforeEach(async () => {
  doodyai = await Doodyai.create({})
})

test('POST /DOODYAIREACTNATIVE 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ id: 'test', name: 'test', created_at date: 'test', output info: 'test', : 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.created_at date).toEqual('test')
  expect(body.output info).toEqual('test')
  expect(body.).toEqual('test')
})

test('GET /DOODYAIREACTNATIVE 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /DOODYAIREACTNATIVE/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${doodyai.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(doodyai.id)
})

test('GET /DOODYAIREACTNATIVE/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /DOODYAIREACTNATIVE/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${doodyai.id}`)
    .send({ id: 'test', name: 'test', created_at date: 'test', output info: 'test', : 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(doodyai.id)
  expect(body.id).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.created_at date).toEqual('test')
  expect(body.output info).toEqual('test')
  expect(body.).toEqual('test')
})

test('PUT /DOODYAIREACTNATIVE/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ id: 'test', name: 'test', created_at date: 'test', output info: 'test', : 'test' })
  expect(status).toBe(404)
})

test('DELETE /DOODYAIREACTNATIVE/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${doodyai.id}`)
  expect(status).toBe(204)
})

test('DELETE /DOODYAIREACTNATIVE/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
