import { success, notFound } from '../../services/response/'
import { Doodyai } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Doodyai.create(body)
    .then((doodyai) => doodyai.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Doodyai.find(query, select, cursor)
    .then((doodyais) => doodyais.map((doodyai) => doodyai.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Doodyai.findById(params.id)
    .then(notFound(res))
    .then((doodyai) => doodyai ? doodyai.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Doodyai.findById(params.id)
    .then(notFound(res))
    .then((doodyai) => doodyai ? Object.assign(doodyai, body).save() : null)
    .then((doodyai) => doodyai ? doodyai.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Doodyai.findById(params.id)
    .then(notFound(res))
    .then((doodyai) => doodyai ? doodyai.remove() : null)
    .then(success(res, 204))
    .catch(next)
