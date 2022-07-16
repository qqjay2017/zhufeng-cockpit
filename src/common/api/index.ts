// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import request from "superagent";
import get from "lodash/get";

export class API {
  invoke<T=Record<string,any>>(method: string, url: string, data?: object){
    return new Promise<T>((resolve,reject)=>{
      let req = request(method, url);
    if (method === "get" && data) {
      req.query(data);
    }

    req
      .send(data)
      .then((res) => resolve( res.body as T))
      .catch((err) => {
        console.log(err)
        return reject(err)
      });
    })
  }
  onError(err: any) {
    console.log(err)

  }
}

const api = new API();
export default api;
