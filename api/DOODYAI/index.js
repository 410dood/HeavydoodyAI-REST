import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Doodyai, { schema } from './model'

const router = new Router()
const { id, name, created_at date, output info,  } = schema.tree

/**
 * @api {post} /DOODYAIREACTNATIVE Create doodyai
 * @apiName CreateDoodyai
 * @apiGroup Doodyai
 * @apiParam id Doodyai's id.
 * @apiParam name Doodyai's name.
 * @apiParam created_at date Doodyai's created_at date.
 * @apiParam output info Doodyai's output info.
 * @apiParam  Doodyai's .
 * @apiSuccess {Object} doodyai Doodyai's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Doodyai not found.
 */
router.post('/',
  body({ id, name, created_at date, output info,  }),
  create)

/**
 * @api {get} /DOODYAIREACTNATIVE Retrieve doodyais
 * @apiName RetrieveDoodyais
 * @apiGroup Doodyai
 * @apiUse listParams
 * @apiSuccess {Object[]} doodyais List of doodyais.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /DOODYAIREACTNATIVE/:id Retrieve doodyai
 * @apiName RetrieveDoodyai
 * @apiGroup Doodyai
 * @apiSuccess {Object} doodyai Doodyai's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Doodyai not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /DOODYAIREACTNATIVE/:id Update doodyai
 * @apiName UpdateDoodyai
 * @apiGroup Doodyai
 * @apiParam id Doodyai's id.
 * @apiParam name Doodyai's name.
 * @apiParam created_at date Doodyai's created_at date.
 * @apiParam output info Doodyai's output info.
 * @apiParam  Doodyai's .
 * @apiSuccess {Object} doodyai Doodyai's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Doodyai not found.
 */
router.put('/:id',
  body({ id, name, created_at date, output info,  }),
  update)

/**
 * @api {delete} /DOODYAIREACTNATIVE/:id Delete doodyai
 * @apiName DeleteDoodyai
 * @apiGroup Doodyai
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Doodyai not found.
 */
router.delete('/:id',
  destroy)

export default router
