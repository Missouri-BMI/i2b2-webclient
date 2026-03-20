import PropTypes from "prop-types";

export const QUERY_STATUSES
    = {
    statuses: {
        SUBMITTED: {
            order: 10,
            name: "Submitted",
        },
        PROCESSING: {
            order: 20,
            name: "Processing"
        },
        QUEUED: {
            order: 30,
            name: "Queued",
        },
        MEDIUM_QUEUE: {
            order: 40,
            name: "Medium Queue",
        },
        LONG_QUEUE: {
            order: 50,
            name: "Long Queue",
        },
        CANCELLED: {
            order: 60,
            name: "Cancelled",
        },
        INCOMPLETE: {
            order: 70,
            name: "Incomplete",
        },
        FINISHED: {
            order: 80,
            name: "Finished"
        },
        ERROR: {
            order: 90,
            name: "Error"
        },
        UNKNOWN: {
            order: 1000,
            name: "Unknown",
            i2b2Status: "",
        }
    },
    getStatusKeysAsList: () => Object.keys(QUERY_STATUSES.statuses),
    lookupStatusKey: (status) => Object.keys(QUERY_STATUSES.statuses).find(key => QUERY_STATUSES.statuses[key] === status),
    convertI2b2Status: (i2b2Status) => {
        let status = QUERY_STATUSES.statuses[i2b2Status];
       if(status === undefined || status?.length === 0) {
            status = QUERY_STATUSES.statuses.UNKNOWN;
            console.warn("Unknown request status: " + i2b2Status);
        }

        return status;
    }
};


export const QueryStatus = ({
    status= QUERY_STATUSES.statuses.UNKNOWN,
    i2b2Status= null
} = {}) => ({
    status,
    i2b2Status,
});

QueryStatus.propTypes = {
    status: PropTypes.oneOf([
        QUERY_STATUSES.statuses.SUBMITTED,
        QUERY_STATUSES.statuses.PROCESSING,
        QUERY_STATUSES.statuses.QUEUED,
        QUERY_STATUSES.statuses.MEDIUM_QUEUE,
        QUERY_STATUSES.statuses.LONG_QUEUE,
        QUERY_STATUSES.statuses.CANCELLED,
        QUERY_STATUSES.statuses.INCOMPLETE,
        QUERY_STATUSES.statuses.FINISHED,
        QUERY_STATUSES.statuses.ERROR,
        QUERY_STATUSES.statuses.UNKNOWN
    ]).isRequired,
    i2b2Status: PropTypes.string.isRequired
};
