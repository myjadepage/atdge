<template>
  <div class="container-fluid">
    <!-- Begin Page Header-->
    <div class="row">
      <div class="page-header">
        <div class="d-flex align-items-center">
          <h2 class="page-header-title">캠페인 리포트</h2>
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/"><i class="ti ti-home"></i></a>
            </li>
            <li class="breadcrumb-item"><a href="#">리포트</a></li>
            <li class="breadcrumb-item active">캠페인 리포트</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- End Page Header -->

    <div class="row flex-row">
      <div class="col-xl-12">
        <ul class="nav nav-tabs nav-fill chart-tabs" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="base-tab-ctr"
              data-toggle="tab"
              href="#tab-ctr"
              role="tab"
              aria-controls="tab-ctr"
              aria-selected="true"
            >
              <h3>-</h3>
              Click-Through Rate
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="base-tab-cpc"
              data-toggle="tab"
              href="#tab-cpc"
              role="tab"
              aria-controls="tab-cpc"
              aria-selected="false"
            >
              <h3>-</h3>
              Cost per click
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="base-tab-cpm"
              data-toggle="tab"
              href="#tab-cpm"
              role="tab"
              aria-controls="tab-cpm"
              aria-selected="false"
            >
              <h3>￦22,000</h3>
              CPM
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="base-tab-views"
              data-toggle="tab"
              href="#tab-views"
              role="tab"
              aria-controls="tab-views"
              aria-selected="false"
            >
              <h3>2</h3>
              노출수
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="base-tab-cost"
              data-toggle="tab"
              href="#tab-cost"
              role="tab"
              aria-controls="tab-cost"
              aria-selected="false"
            >
              <h3>￦22</h3>
              광고비용
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="base-tab-reach"
              data-toggle="tab"
              href="#tab-reach"
              role="tab"
              aria-controls="tab-reach"
              aria-selected="false"
            >
              <h3>2</h3>
              도달
            </a>
          </li>
        </ul>
        <div class="tab-content">
          <!--메뉴1. CTR 그래프-->
          <div
            class="tab-pane fade show active"
            id="tab-ctr"
            role="tabpanel"
            aria-labelledby="base-tab-ctr"
          >
            <div class="widget">
              <div
                class="
                  widget-header
                  no-actions
                  d-flex
                  align-items-center
                  justify-content-end
                "
              >
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="base-tab-day-ctr"
                      data-toggle="tab"
                      href="#tab-day-ctr"
                      role="tab"
                      aria-controls="tab-day-ctr"
                      aria-selected="true"
                    >
                      일간
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="base-tab-week-ctr"
                      data-toggle="tab"
                      href="#tab-week-ctr"
                      role="tab"
                      aria-controls="tab-week-ctr"
                      aria-selected="false"
                    >
                      주간
                    </a>
                  </li>
                </ul>
              </div>
              <div class="widget-body">
                <div class="tab-content">
                  <!-- 일간 -->
                  <div
                    class="tab-pane fade show active"
                    id="tab-day-ctr"
                    role="tabpanel"
                    aria-labelledby="base-tab-day-ctr"
                  >
                    <div class="chart">
                      <canvas id="chart-day-ctr" height="70px"></canvas>
                    </div>
                  </div>
                  <!-- // 일간 -->

                  <!-- 주간 -->
                  <div
                    class="tab-pane fade"
                    id="tab-week-ctr"
                    role="tabpanel"
                    aria-labelledby="base-tab-week-ctr"
                  >
                    <div class="chart">
                      <canvas id="chart-week-ctr" height="70px"></canvas>
                    </div>
                  </div>
                  <!-- // 주간 -->
                </div>
              </div>
            </div>
          </div>
          <!-- // 메뉴1. CTR 그래프-->

          <!--메뉴2. CPC 그래프-->
          <div
            class="tab-pane fade"
            id="tab-cpc"
            role="tabpanel"
            aria-labelledby="base-tab-cpc"
          >
            <div class="widget has-shadow">
              <div
                class="
                  widget-header
                  no-actions
                  d-flex
                  align-items-center
                  justify-content-end
                "
              >
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="base-tab-day-cpc"
                      data-toggle="tab"
                      href="#tab-day-cpc"
                      role="tab"
                      aria-controls="tab-day-cpc"
                      aria-selected="true"
                    >
                      일간
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="base-tab-week-cpc"
                      data-toggle="tab"
                      href="#tab-week-cpc"
                      role="tab"
                      aria-controls="tab-week-cpc"
                      aria-selected="false"
                    >
                      주간
                    </a>
                  </li>
                </ul>
              </div>
              <div class="widget-body">
                <div class="tab-content">
                  <!-- 일간 -->
                  <div
                    class="tab-pane fade show active"
                    id="tab-day-cpc"
                    role="tabpanel"
                    aria-labelledby="base-tab-day-cpc"
                  >
                    <div class="chart">
                      <canvas id="chart-day-cpc" height="70px"></canvas>
                    </div>
                  </div>
                  <!-- // 일간 -->

                  <!-- 주간 -->
                  <div
                    class="tab-pane fade"
                    id="tab-week-cpc"
                    role="tabpanel"
                    aria-labelledby="base-tab-week-cpc"
                  >
                    <div class="chart">
                      <canvas id="chart-week-cpc" height="70px"></canvas>
                    </div>
                  </div>
                  <!-- // 주간 -->
                </div>
              </div>
            </div>
          </div>
          <!-- // 메뉴2. CPC 그래프-->

          <!--메뉴3. CPM 그래프-->
          <div
            class="tab-pane fade"
            id="tab-cpm"
            role="tabpanel"
            aria-labelledby="base-tab-cpm"
          >
            <div class="widget has-shadow">
              <div
                class="
                  widget-header
                  no-actions
                  d-flex
                  align-items-center
                  justify-content-end
                "
              >
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="base-tab-day-cpm"
                      data-toggle="tab"
                      href="#tab-day-cpm"
                      role="tab"
                      aria-controls="tab-day-cpm"
                      aria-selected="true"
                    >
                      일간
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="base-tab-week-cpm"
                      data-toggle="tab"
                      href="#tab-week-cpm"
                      role="tab"
                      aria-controls="tab-week-cpm"
                      aria-selected="false"
                    >
                      주간
                    </a>
                  </li>
                </ul>
              </div>
              <div class="widget-body">
                <div class="tab-content">
                  <!-- 일간 -->
                  <div
                    class="tab-pane fade show active"
                    id="tab-day-cpm"
                    role="tabpanel"
                    aria-labelledby="base-tab-day-cpm"
                  >
                    <div class="chart">
                      <canvas id="chart-day-cpm" height="70px"></canvas>
                    </div>
                  </div>
                  <!-- // 일간 -->

                  <!-- 주간 -->
                  <div
                    class="tab-pane fade"
                    id="tab-week-cpm"
                    role="tabpanel"
                    aria-labelledby="base-tab-week-cpm"
                  >
                    <div class="chart">
                      <canvas id="chart-week-cpm" height="70px"></canvas>
                    </div>
                  </div>
                  <!-- // 주간 -->
                </div>
              </div>
            </div>
          </div>
          <!-- // 메뉴3. CPM 그래프-->

          <!--메뉴4. 노출수 그래프-->
          <div
            class="tab-pane fade"
            id="tab-views"
            role="tabpanel"
            aria-labelledby="base-tab-views"
          >
            <div class="widget has-shadow">
              <div
                class="
                  widget-header
                  no-actions
                  d-flex
                  align-items-center
                  justify-content-end
                "
              >
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="base-tab-day-views"
                      data-toggle="tab"
                      href="#tab-day-views"
                      role="tab"
                      aria-controls="tab-day-views"
                      aria-selected="true"
                    >
                      일간</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="base-tab-week-views"
                      data-toggle="tab"
                      href="#tab-week-views"
                      role="tab"
                      aria-controls="tab-week-views"
                      aria-selected="false"
                    >
                      주간</a
                    >
                  </li>
                </ul>
              </div>
              <div class="widget-body">
                <div class="tab-content">
                  <!-- 일간 -->
                  <div
                    class="tab-pane fade show active"
                    id="tab-day-views"
                    role="tabpanel"
                    aria-labelledby="base-tab-day-views"
                  >
                    <div class="chart">
                      <canvas id="chart-day-views" height="70px"></canvas>
                    </div>
                  </div>
                  <!-- // 일간 -->

                  <!-- 주간 -->
                  <div
                    class="tab-pane fade"
                    id="tab-week-views"
                    role="tabpanel"
                    aria-labelledby="base-tab-week-views"
                  >
                    <div class="chart">
                      <canvas id="chart-week-views" height="70px"></canvas>
                    </div>
                  </div>
                  <!-- // 주간 -->
                </div>
              </div>
            </div>
          </div>
          <!-- // 메뉴4. 노출수 그래프-->

          <!--메뉴5. 광고비용 그래프-->
          <div
            class="tab-pane fade"
            id="tab-cost"
            role="tabpanel"
            aria-labelledby="base-tab-cost"
          >
            <div class="widget has-shadow">
              <div
                class="
                  widget-header
                  no-actions
                  d-flex
                  align-items-center
                  justify-content-end
                "
              >
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="base-tab-day-cost"
                      data-toggle="tab"
                      href="#tab-day-cost"
                      role="tab"
                      aria-controls="tab-day-cost"
                      aria-selected="true"
                    >
                      일간</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="base-tab-week-cost"
                      data-toggle="tab"
                      href="#tab-week-cost"
                      role="tab"
                      aria-controls="tab-week-cost"
                      aria-selected="false"
                    >
                      주간</a
                    >
                  </li>
                </ul>
              </div>
              <div class="widget-body">
                <div class="tab-content">
                  <!-- 도달그래프 일간 -->
                  <div
                    class="tab-pane fade show active"
                    id="tab-day-cost"
                    role="tabpanel"
                    aria-labelledby="base-tab-day-cost"
                  >
                    <div class="chart">
                      <canvas id="chart-day-cost" height="70px"></canvas>
                    </div>
                  </div>
                  <!-- // 도달그래프 일간 -->

                  <!-- 도달그래프 주간 -->
                  <div
                    class="tab-pane fade"
                    id="tab-week-cost"
                    role="tabpanel"
                    aria-labelledby="base-tab-week-cost"
                  >
                    <div class="chart">
                      <canvas id="chart-week-cost" height="70px"></canvas>
                    </div>
                  </div>
                  <!-- // 도달그래프 주간 -->
                </div>
              </div>
            </div>
          </div>
          <!-- // 메뉴5. 광고비용 그래프-->

          <!--메뉴6. 도달 그래프-->
          <div
            class="tab-pane fade"
            id="tab-reach"
            role="tabpanel"
            aria-labelledby="base-tab-reach"
          >
            <div class="widget has-shadow">
              <div
                class="
                  widget-header
                  no-actions
                  d-flex
                  align-items-center
                  justify-content-end
                "
              >
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="base-tab-day-reach"
                      data-toggle="tab"
                      href="#tab-day-reach"
                      role="tab"
                      aria-controls="tab-day-reach"
                      aria-selected="true"
                    >
                      일간</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="base-tab-week-reach"
                      data-toggle="tab"
                      href="#tab-week-reach"
                      role="tab"
                      aria-controls="tab-week-reach"
                      aria-selected="false"
                    >
                      주간</a
                    >
                  </li>
                </ul>
              </div>
              <div class="widget-body">
                <div class="tab-content">
                  <!-- 도달그래프 일간 -->
                  <div
                    class="tab-pane fade show active"
                    id="tab-day-reach"
                    role="tabpanel"
                    aria-labelledby="base-tab-day-reach"
                  >
                    <div class="chart">
                      <canvas id="chart-day-reach" height="70px"></canvas>
                    </div>
                  </div>
                  <!-- // 도달그래프 일간 -->

                  <!-- 도달그래프 주간 -->
                  <div
                    class="tab-pane fade"
                    id="tab-week-reach"
                    role="tabpanel"
                    aria-labelledby="base-tab-week-reach"
                  >
                    <div class="chart">
                      <canvas id="chart-week-reach" height="70px"></canvas>
                    </div>
                  </div>
                  <!-- // 도달그래프 주간 -->
                </div>
              </div>
            </div>
          </div>
          <!-- // 메뉴6. 도달 그래프-->
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
                    <th>캠페인</th>
                    <th>광고 상태</th>
                    <th>캠페인 아이디</th>
                    <th>광고유형</th>
                    <th>예산</th>
                    <th>CTR</th>
                    <th>CPC</th>
                    <th>CPM</th>
                    <th>노출</th>
                    <th>광고비용</th>
                    <th>도달</th>
                    <th>빈도</th>
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
                    <td>
                      게시물:클라우저마스크체험단 집행 사례 인스타그램 체험단
                      모집
                    </td>
                    <td>정상</td>
                    <td></td>
                    <td>링크클릭</td>
                    <td>$139.45</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>$139.45</td>
                    <td></td>
                    <td></td>
                    <td>2021-03-10</td>
                    <td>2021-03-30</td>
                  </tr>
                  <!-- 엣지광고 하단-->
                  <tr>
                    <td>
                      <div class="styled-checkbox">
                        <input type="checkbox" name="cb1" id="cb1" />
                        <label for="cb1"></label>
                      </div>
                    </td>
                    <td>
                      엣지광고
                      <button
                        type="button"
                        id="btnAD01"
                        class="btn btn-sm btn-square"
                        aria-expanded="false"
                        onclick="toggle(this.id,'#AD01');"
                        aria-controls="AD01"
                      >
                        <i class="la la-plus"></i>
                      </button>
                      <span
                        class="badge-text badge-text-small info"
                        style="float: right"
                        >1</span
                      >
                    </td>
                    <td>정상</td>
                    <td></td>
                    <td>링크클릭</td>
                    <td>$139.45</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>$139.45</td>
                    <td></td>
                    <td></td>
                    <td>2021-03-10</td>
                    <td>2021-03-30</td>
                  </tr>
                  <tr id="AD01" class="hidden">
                    <td>
                      <div class="styled-checkbox">
                        <input type="checkbox" name="cb1" id="cb1" />
                        <label for="cb1"></label>
                      </div>
                    </td>
                    <td>
                      <i class="la la-caret-right"></i>엣지광고세트
                      <button
                        type="button"
                        id="btnAD01-1"
                        class="btn btn-sm btn-square"
                        aria-expanded="false"
                        onclick="toggle(this.id,'#AD01-1, #AD01-2');"
                        aria-controls="AD01-1 AD01-2"
                      >
                        <i class="la la-plus"></i>
                      </button>
                      <span
                        class="badge-text badge-text-small info"
                        style="float: right"
                        >2</span
                      >
                    </td>
                    <td>정상</td>
                    <td></td>
                    <td>링크클릭</td>
                    <td>$139.45</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>$139.45</td>
                    <td></td>
                    <td></td>
                    <td>2021-03-10</td>
                    <td>2021-03-30</td>
                  </tr>
                  <tr id="AD01-1" class="hidden">
                    <td>
                      <div class="styled-checkbox">
                        <input type="checkbox" name="cb1" id="cb1" />
                        <label for="cb1"></label>
                      </div>
                    </td>
                    <td colspan="3">
                      <i class="la la-caret-right"></i
                      ><i class="la la-caret-right"></i>엣지광고
                      <img
                        src="../assets//img/icone-01.png"
                        alt="광고이미지"
                        style="width: 50px; height: 50px"
                      />
                    </td>
                    <td>링크클릭</td>
                    <td>$139.45</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>$139.45</td>
                    <td></td>
                    <td></td>
                    <td>2021-03-10</td>
                    <td>2021-03-30</td>
                  </tr>
                  <tr id="AD01-2" class="hidden">
                    <td>
                      <div class="styled-checkbox">
                        <input type="checkbox" name="cb1" id="cb1" />
                        <label for="cb1"></label>
                      </div>
                    </td>
                    <td colspan="3">
                      <i class="la la-caret-right"></i
                      ><i class="la la-caret-right"></i>엣지광고
                      <img
                        src="../assets//img/icone-01.png"
                        alt="광고이미지"
                        style="width: 50px; height: 50px"
                      />
                    </td>
                    <td>링크클릭</td>
                    <td>$139.45</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>$139.45</td>
                    <td></td>
                    <td></td>
                    <td>2021-03-10</td>
                    <td>2021-03-30</td>
                  </tr>
                  <!-- // 엣지광고 하단-->
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
