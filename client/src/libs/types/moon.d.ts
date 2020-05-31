declare namespace Moon {
  /**
   * 错误类
   */
  interface ErrorInfo {
    /**
     * 用户id
     */
    userId: string,
    /**
     * 账户名称
     */
    userName: string,
    /**
     * 请求源地址
     */
    origin: string,
    /**
     * 用户设备
     */
    userAgent: string,
    /**
     * 时间戳
     */
    timestamp: number,
    /**
     * 错误信息单元
     */
    error: {
      /**
       * 错误信息
       */
      message: string,
      /**
       * 错误栈，详细信息
       */
      stack: string,
      /**
       * 错误文件名称
       */
      filename: string,
      /**
       * 错误行
       */
      line?: number,
      /**
       * 错误列
       */
      column?: number,
      /**
       * 错误类型
       */
      type: string
    };
  }

  /**
   * 错误事件通道
   */
  interface ErrorArgs {
    msg?: string,
    url?: string,
    row?: number | string,
    col?: number | string
    error: Error
  }

  /**
   * 性能类
   */
  interface Performance {
  }

}
