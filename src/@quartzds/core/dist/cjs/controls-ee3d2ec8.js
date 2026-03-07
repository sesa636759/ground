/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
'use strict';

// SPDX-FileCopyrightText: © 2024 Schneider Electric
//
// SPDX-License-Identifier: Apache-2.0
const CUSTOM_ERROR_FLAGS = { customError: true };
const NO_ERROR_FLAGS = {};
const VALID_STATE = {
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valid: true,
    valueMissing: false,
};

exports.CUSTOM_ERROR_FLAGS = CUSTOM_ERROR_FLAGS;
exports.NO_ERROR_FLAGS = NO_ERROR_FLAGS;
exports.VALID_STATE = VALID_STATE;

//# sourceMappingURL=controls-ee3d2ec8.js.map