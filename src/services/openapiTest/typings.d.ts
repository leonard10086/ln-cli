declare namespace API {
  type getByIdUsingGETParams = {
    /** 数据id */
    id: number;
  };

  type IntegralGrade_ = {
    /** 借款额度 */
    borrowAmount?: number;
    /** 创建时间 */
    createTime?: string;
    /** 逻辑删除(1:已删除，0:未删除) */
    deleted?: boolean;
    /** 编号 */
    id?: number;
    /** 积分区间结束 */
    integralEnd?: number;
    /** 积分区间开始 */
    integralStart?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type removeByIdUsingDELETEParams = {
    /** 数据id */
    id: number;
  };
}
