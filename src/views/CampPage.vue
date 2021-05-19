<template>
  <div class="container-fluid">
    <!-- Begin Page Header-->
    <div class="row">
      <div class="page-header">
        <div class="d-flex align-items-center">
          <h2 class="page-header-title">캠페인 페이지</h2>
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="index.html"><i class="ti ti-home"></i></a>
            </li>
            <li class="breadcrumb-item"><a href="#">캠페인 페이지</a></li>
            <li class="breadcrumb-item active">캠페인 리스트</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- End Page Header -->

    <div class="row flex-row">
      <div class="col-xl-12">
        <!-- 검색area -->
        <div class="widget">
          <div class="widget-body no-padding-bottom">
            <div class="form-group row">
              <div class="col-lg-2 mb-3">
                <select name="account" class="custom-select form-control">
                  <option value="">전체기간</option>
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                </select>
              </div>
              <div class="col-lg-8">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="제목, 채널, 상태로 검색하기"
                  />
                  <span class="input-group-btn">
                    <button type="button" class="btn btn-primary">
                      <i class="la la-search"></i>검색
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- table area -->
      <div class="col-xl-12">
        <div class="widget">
          <div class="widget-body">
            <div class="table-responsive-lg">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <div class="styled-checkbox">
                        <input type="checkbox" name="checkbox" id="check-all" />
                        <label for="check-all"></label>
                      </div>
                    </th>
                    <th>캠페인 이름</th>
                    <th>캠페인 아이디</th>
                    <th>상태</th>
                    <th>시작일</th>
                    <th>종료일</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="styled-checkbox">
                        <input type="checkbox" name="cb1" id="cb1" />
                        <label for="cb1"></label>
                      </div>
                    </td>
                    <td>광고 캠페인 명</td>
                    <td>565646564564565</td>
                    <td>종료</td>
                    <td>2021-03-10</td>
                    <td>2021-03-30</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="styled-checkbox">
                        <input type="checkbox" name="cb1" id="cb1" />
                        <label for="cb1"></label>
                      </div>
                    </td>
                    <td>광고 캠페인 명</td>
                    <td>565646564564565</td>
                    <td>종료</td>
                    <td>2021-03-10</td>
                    <td>2021-03-30</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div
            class="widget-footer d-flex align-items-center justify-content-end"
          >
            <button type="button " class="btn btn-square btn-danger ripple">
              삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
