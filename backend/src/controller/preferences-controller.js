import preferencesService from "../service/preferences-service.js";

const create = async (req, res, next) => {
    try {
        const result = await preferencesService.create(req);
        res.status(200).json({
            status: "success",
            message: "success add data preferences",
            data: result
        });
    } catch (e) {
        next(e);
    }
};

const update = async (req, res, next) => {
    try {
        const result = await preferencesService.update(req);
        res.status(200).json({
            status: "success",
            message: "success update data preferences",
            data: result
        })
    } catch (e) {
        next(e);
    }
}

const remove = async (req, res, next) => {
    try {
        const result = await preferencesService.remove(req);
        res.status(200).json({
            status: "success",
            message: "success remove data preferences",
            data: result
        })
    } catch (e) {
        next(e);
    }
}

const getDetail = async (req, res, next) => {
    try {
        const result = await preferencesService.getDetail(req);
        res.status(200).json({
            status: "success",
            message: "success get detail data preferences",
            data: result
        })
    } catch (e) {
        next(e);
    }
}

const getAll = async (req, res, next) => {
    try {
        const result = await preferencesService.getAll(req);
        res.status(200).json({
            status: "success",
            message: "success get all data preferences",
            data: result
        })
    } catch (e) {
        next(e);
    }
}

export default {
    create, update, remove, getDetail, getAll
};
