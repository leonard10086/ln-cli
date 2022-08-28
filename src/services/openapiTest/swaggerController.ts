// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据id查询积分等级 GET /admin/integralGrade/getById/${param0} */
export async function getByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.IntegralGrade_>(`/admin/integralGrade/getById/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 积分等级列表 GET /admin/integralGrade/list */
export async function listAllUsingGET(options?: { [key: string]: any }) {
  return request<API.IntegralGrade_[]>('/admin/integralGrade/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据id删除积分等级 逻辑删除 DELETE /admin/integralGrade/remove/${param0} */
export async function removeByIdUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.removeByIdUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/admin/integralGrade/remove/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 新增积分等级 POST /admin/integralGrade/save */
export async function saveUsingPOST(body: API.IntegralGrade_, options?: { [key: string]: any }) {
  return request<boolean>('/admin/integralGrade/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id修改积分等级 PUT /admin/integralGrade/updateById */
export async function updateByIdUsingPUT(
  body: API.IntegralGrade_,
  options?: { [key: string]: any },
) {
  return request<boolean>('/admin/integralGrade/updateById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
