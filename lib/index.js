

module.exports = class BunyanShim {
    info() {
        // do nothing
    }
    debug() {
        // do nothing
    }
    trace() {
        // do nothing
    }
    warn() {
        // do nothing
    }

    child() {
        return this;
    }
};

module.exports.stdSerializers = { err: () => {} };
