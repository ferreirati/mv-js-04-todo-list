import ProjectsView from './projects.view';

class DashboardView {
  static render() {
    const html = `
      <div class="container">
        <div class="btn btn-primary" id="add-project">New Project</div>
        <div class="row justify-content-around mt-3">
          <app-projects></app-projects>
        </div>
      </div>`;

    document.getElementsByTagName('router-outlet')[0].innerHTML = html;
  }
}

export default DashboardView;
